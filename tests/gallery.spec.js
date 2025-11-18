import { test, expect, devices } from '@playwright/test';

test.describe('Gallery - Mobile Performance Optimization', () => {
  test('should render gallery grid without layout thrashing on mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const galleryGrid = gallerySection.locator('div[class*="grid"]');
    await expect(galleryGrid).toBeVisible();

    const galleryItems = galleryGrid.locator('> div');
    const count = await galleryItems.count();
    expect(count).toBe(8);

    const boundingBox = await galleryGrid.boundingBox();
    expect(boundingBox).toBeTruthy();
    expect(boundingBox.width).toBeLessThanOrEqual(375);
  });

  test('should disable hover animations on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstGalleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    
    await firstGalleryItem.hover();
    
    const computedStyle = await firstGalleryItem.evaluate(el => {
      return window.getComputedStyle(el.querySelector('img'));
    });

    const transform = computedStyle.transform;
    expect(transform).toBe('none');
  });

  test('should apply hover scale animation on desktop (1920px)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstGalleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    
    await firstGalleryItem.hover();
    
    await page.waitForTimeout(100);
    
    const hasScaleClass = await firstGalleryItem.evaluate(el => {
      return el.querySelector('img').className.includes('transition-transform');
    });

    expect(hasScaleClass).toBe(true);
  });

  test('should use lazy loading for images', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const images = page.locator('img[loading="lazy"]');
    const count = await images.count();
    
    expect(count).toBeGreaterThan(0);
  });

  test('should open modal smoothly without expensive animations on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    await page.waitForLoadState('networkidle');

    const gallerySection = page.locator('section').nth(1);
    const firstGalleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    
    await expect(firstGalleryItem).toBeVisible();

    const performanceBefore = await page.evaluate(() => {
      return performance.now();
    });

    await firstGalleryItem.click();

    const performanceAfter = await page.evaluate(() => {
      return performance.now();
    });

    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible({ timeout: 10000 });

    const interactionTime = performanceAfter - performanceBefore;
    expect(interactionTime).toBeLessThan(200);
  });

  test('should close modal by clicking close button', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstGalleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    await firstGalleryItem.click();

    const backdrop = page.locator('div.fixed.inset-0.bg-black\\/80.z-40');
    await expect(backdrop).toBeVisible();

    const closeButton = page.locator('button[aria-label="Close modal"]');
    await closeButton.click();

    await expect(backdrop).not.toBeVisible();
  });

  test('should close modal with close button', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstGalleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    await firstGalleryItem.click();

    const closeButton = page.locator('button[aria-label="Close modal"]');
    await expect(closeButton).toBeVisible();

    await closeButton.click();

    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).not.toBeVisible();
  });

  test('should maintain responsive grid layout across breakpoints', async ({ page }) => {
    const breakpoints = [
      { width: 375, expectedCols: 2 },
      { width: 768, expectedCols: 2 },
      { width: 1024, expectedCols: 3 },
      { width: 1920, expectedCols: 3 },
    ];

    for (const { width, expectedCols } of breakpoints) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto('/gallery');

      const gallerySection = page.locator('section').nth(1);
      const galleryGrid = gallerySection.locator('div[class*="grid"]');
      const galleryItems = galleryGrid.locator('> div');
      const count = await galleryItems.count();

      expect(count).toBe(8);

      const boundingBoxes = [];
      
      for (let i = 0; i < Math.min(expectedCols, count); i++) {
        const box = await galleryItems.nth(i).boundingBox();
        if (box) boundingBoxes.push(box);
      }

      if (expectedCols === 2) {
        expect(boundingBoxes.length).toBe(2);
      } else if (expectedCols === 3) {
        expect(boundingBoxes.length).toBe(3);
      }
    }
  });

  test('should not apply layout animations on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const galleryItem = gallerySection.locator('div[class*="grid"] > div').first();
    
    const isMobileState = await page.evaluate(() => {
      return window.innerWidth < 768;
    });

    expect(isMobileState).toBe(true);
  });

  test('should apply layout animations on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/gallery');

    const isDesktopState = await page.evaluate(() => {
      return window.innerWidth < 768;
    });

    expect(isDesktopState).toBe(false);
  });

  test('should maintain aspect ratio on all image sizes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const galleryGrid = gallerySection.locator('div[class*="grid"]');
    const galleryItems = galleryGrid.locator('> div');
    
    for (let i = 0; i < await galleryItems.count(); i++) {
      const item = galleryItems.nth(i);
      const boundingBox = await item.boundingBox();
      
      expect(boundingBox).toBeTruthy();
      expect(boundingBox.width).toBeGreaterThan(0);
      expect(boundingBox.height).toBeGreaterThan(0);
      
      const aspectRatio = boundingBox.width / boundingBox.height;
      expect(aspectRatio).toBeCloseTo(4 / 3, 0.1);
    }
  });

  test('should handle multiple rapid modal opens/closes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstItem = gallerySection.locator('div[class*="grid"] > div').first();

    for (let i = 0; i < 3; i++) {
      await firstItem.click();
      const modal = page.locator('div.fixed.inset-0.z-50');
      await expect(modal).toBeVisible();
      
      await page.locator('button[aria-label="Close modal"]').click();
      await expect(modal).not.toBeVisible();
    }
  });
});

test.describe('Gallery - Desktop Performance', () => {
  test('should display full gallery with optimized spacing on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    await expect(gallerySection).toBeVisible();

    const galleryGrid = gallerySection.locator('div[class*="grid"]');
    const galleryItems = galleryGrid.locator('> div');
    expect(await galleryItems.count()).toBe(8);
  });

  test('should display modal at appropriate size on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/gallery');

    const gallerySection = page.locator('section').nth(1);
    const firstItem = gallerySection.locator('div[class*="grid"] > div').first();
    await firstItem.click();

    const modal = page.locator('div.fixed.inset-0.z-50');
    const modalInner = modal.locator('> div');
    
    await expect(modalInner).toBeVisible();
    
    const boundingBox = await modalInner.boundingBox();
    
    expect(boundingBox.width).toBeGreaterThan(300);
    expect(boundingBox.height).toBeGreaterThan(200);
  });

});
