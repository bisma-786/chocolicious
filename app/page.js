'use client';

import { useEffect, useRef, useState } from 'react';
import './globals.css';

// Configuration object for easy customization
const CONFIG = {
    brandName: "Frisky",
    copyrightYear: "2026",
    productName: "Frisky Rolls",
    contactLink: "https://www.linkedin.com/in/bisma-razzaq786/",
    ctaLink: "https://www.foodpanda.pk/groceries/product/r1vf-1831/innovative-frisky-rolls-hazelnut-family-pack-box",
    sequencePaths: {
        'sequence1': '/sequence1/',
        'sequence2': '/sequence2/',
        'sequence3': '/sequence3/',
        'sequence4': '/sequence4/'
    },
    overlayTexts: {
        'sequence1': {
            headline: "Precision begins with selection.",
            subtext: "Each ingredient chosen with meticulous care. No shortcuts, no compromises."
        },
        'sequence2': {
            headline: "Molten mastery.",
            subtext: "Chocolate transformed through exacting temperatures. Every drop holds intention."
        },
        'sequence3': {
            headline: "Engineering elegance.",
            subtext: "Where science meets artistry. Each curve calculated, each fold perfected."
        },
        'sequence4': {
            headline: "Heritage crafted. Future refined.",
            subtext: "A legacy of taste, shaped for tomorrow's connoisseurs."
        }
    }
};

export default function Home() {
    const canvasRef = useRef(null);
    const [showPreloader, setShowPreloader] = useState(true);
    const [activeOverlay, setActiveOverlay] = useState('sequence1');
    const [showCta, setShowCta] = useState(false);

    useEffect(() => {
        class ScrollytellingAnimation {
            constructor() {
                this.canvas = canvasRef.current;
                this.ctx = this.canvas.getContext('2d');

                // Set canvas size
                this.resizeCanvas();

                // Explicit image arrays for each sequence
                this.sequence1 = [
                    "undefined_iwdl_001.jpg", "undefined_iwdl_002.jpg", "undefined_iwdl_003.jpg", "undefined_iwdl_004.jpg", "undefined_iwdl_005.jpg",
                    "undefined_iwdl_006.jpg", "undefined_iwdl_007.jpg", "undefined_iwdl_008.jpg", "undefined_iwdl_009.jpg", "undefined_iwdl_010.jpg",
                    "undefined_iwdl_011.jpg", "undefined_iwdl_012.jpg", "undefined_iwdl_013.jpg", "undefined_iwdl_014.jpg", "undefined_iwdl_015.jpg",
                    "undefined_iwdl_016.jpg", "undefined_iwdl_017.jpg", "undefined_iwdl_018.jpg", "undefined_iwdl_019.jpg", "undefined_iwdl_020.jpg",
                    "undefined_iwdl_021.jpg", "undefined_iwdl_022.jpg", "undefined_iwdl_023.jpg", "undefined_iwdl_024.jpg", "undefined_iwdl_025.jpg",
                    "undefined_iwdl_026.jpg", "undefined_iwdl_027.jpg", "undefined_iwdl_028.jpg", "undefined_iwdl_029.jpg", "undefined_iwdl_030.jpg",
                    "undefined_iwdl_031.jpg", "undefined_iwdl_032.jpg", "undefined_iwdl_033.jpg", "undefined_iwdl_034.jpg", "undefined_iwdl_035.jpg",
                    "undefined_iwdl_036.jpg", "undefined_iwdl_037.jpg", "undefined_iwdl_038.jpg", "undefined_iwdl_039.jpg", "undefined_iwdl_040.jpg",
                    "undefined_iwdl_041.jpg", "undefined_iwdl_042.jpg", "undefined_iwdl_043.jpg", "undefined_iwdl_044.jpg", "undefined_iwdl_045.jpg",
                    "undefined_iwdl_046.jpg", "undefined_iwdl_047.jpg", "undefined_iwdl_048.jpg", "undefined_iwdl_049.jpg", "undefined_iwdl_050.jpg",
                    "undefined_iwdl_051.jpg", "undefined_iwdl_052.jpg", "undefined_iwdl_053.jpg", "undefined_iwdl_054.jpg", "undefined_iwdl_055.jpg",
                    "undefined_iwdl_056.jpg", "undefined_iwdl_057.jpg", "undefined_iwdl_058.jpg", "undefined_iwdl_059.jpg", "undefined_iwdl_060.jpg",
                    "undefined_iwdl_061.jpg", "undefined_iwdl_062.jpg", "undefined_iwdl_063.jpg", "undefined_iwdl_064.jpg", "undefined_iwdl_065.jpg",
                    "undefined_iwdl_066.jpg", "undefined_iwdl_067.jpg", "undefined_iwdl_068.jpg", "undefined_iwdl_069.jpg", "undefined_iwdl_070.jpg",
                    "undefined_iwdl_071.jpg", "undefined_iwdl_072.jpg", "undefined_iwdl_073.jpg", "undefined_iwdl_074.jpg", "undefined_iwdl_075.jpg",
                    "undefined_iwdl_076.jpg", "undefined_iwdl_077.jpg", "undefined_iwdl_078.jpg", "undefined_iwdl_079.jpg", "undefined_iwdl_080.jpg",
                    "undefined_iwdl_081.jpg", "undefined_iwdl_082.jpg", "undefined_iwdl_083.jpg", "undefined_iwdl_084.jpg", "undefined_iwdl_085.jpg",
                    "undefined_iwdl_086.jpg", "undefined_iwdl_087.jpg", "undefined_iwdl_088.jpg", "undefined_iwdl_089.jpg", "undefined_iwdl_090.jpg",
                    "undefined_iwdl_091.jpg", "undefined_iwdl_092.jpg", "undefined_iwdl_093.jpg", "undefined_iwdl_094.jpg", "undefined_iwdl_095.jpg",
                    "undefined_iwdl_096.jpg", "undefined_iwdl_097.jpg", "undefined_iwdl_098.jpg", "undefined_iwdl_099.jpg", "undefined_iwdl_100.jpg",
                    "undefined_iwdl_101.jpg", "undefined_iwdl_102.jpg", "undefined_iwdl_103.jpg", "undefined_iwdl_104.jpg", "undefined_iwdl_105.jpg",
                    "undefined_iwdl_106.jpg", "undefined_iwdl_107.jpg", "undefined_iwdl_108.jpg", "undefined_iwdl_109.jpg", "undefined_iwdl_110.jpg",
                    "undefined_iwdl_111.jpg", "undefined_iwdl_112.jpg", "undefined_iwdl_113.jpg", "undefined_iwdl_114.jpg", "undefined_iwdl_115.jpg",
                    "undefined_iwdl_116.jpg", "undefined_iwdl_117.jpg", "undefined_iwdl_118.jpg", "undefined_iwdl_119.jpg", "undefined_iwdl_120.jpg"
                ];

                this.sequence2 = [
                    "Bright_Storm_19_Jan_24OD_001.jpg", "Bright_Storm_19_Jan_24OD_002.jpg", "Bright_Storm_19_Jan_24OD_003.jpg", "Bright_Storm_19_Jan_24OD_004.jpg", "Bright_Storm_19_Jan_24OD_005.jpg",
                    "Bright_Storm_19_Jan_24OD_006.jpg", "Bright_Storm_19_Jan_24OD_007.jpg", "Bright_Storm_19_Jan_24OD_008.jpg", "Bright_Storm_19_Jan_24OD_009.jpg", "Bright_Storm_19_Jan_24OD_010.jpg",
                    "Bright_Storm_19_Jan_24OD_011.jpg", "Bright_Storm_19_Jan_24OD_012.jpg", "Bright_Storm_19_Jan_24OD_013.jpg", "Bright_Storm_19_Jan_24OD_014.jpg", "Bright_Storm_19_Jan_24OD_015.jpg",
                    "Bright_Storm_19_Jan_24OD_016.jpg", "Bright_Storm_19_Jan_24OD_017.jpg", "Bright_Storm_19_Jan_24OD_018.jpg", "Bright_Storm_19_Jan_24OD_019.jpg", "Bright_Storm_19_Jan_24OD_020.jpg",
                    "Bright_Storm_19_Jan_24OD_021.jpg", "Bright_Storm_19_Jan_24OD_022.jpg", "Bright_Storm_19_Jan_24OD_023.jpg", "Bright_Storm_19_Jan_24OD_024.jpg", "Bright_Storm_19_Jan_24OD_025.jpg",
                    "Bright_Storm_19_Jan_24OD_026.jpg", "Bright_Storm_19_Jan_24OD_027.jpg", "Bright_Storm_19_Jan_24OD_028.jpg", "Bright_Storm_19_Jan_24OD_029.jpg", "Bright_Storm_19_Jan_24OD_030.jpg",
                    "Bright_Storm_19_Jan_24OD_031.jpg", "Bright_Storm_19_Jan_24OD_032.jpg", "Bright_Storm_19_Jan_24OD_033.jpg", "Bright_Storm_19_Jan_24OD_034.jpg", "Bright_Storm_19_Jan_24OD_035.jpg",
                    "Bright_Storm_19_Jan_24OD_036.jpg", "Bright_Storm_19_Jan_24OD_037.jpg", "Bright_Storm_19_Jan_24OD_038.jpg", "Bright_Storm_19_Jan_24OD_039.jpg", "Bright_Storm_19_Jan_24OD_040.jpg",
                    "Bright_Storm_19_Jan_24OD_041.jpg", "Bright_Storm_19_Jan_24OD_042.jpg", "Bright_Storm_19_Jan_24OD_043.jpg", "Bright_Storm_19_Jan_24OD_044.jpg", "Bright_Storm_19_Jan_24OD_045.jpg",
                    "Bright_Storm_19_Jan_24OD_046.jpg", "Bright_Storm_19_Jan_24OD_047.jpg", "Bright_Storm_19_Jan_24OD_048.jpg", "Bright_Storm_19_Jan_24OD_049.jpg", "Bright_Storm_19_Jan_24OD_050.jpg",
                    "Bright_Storm_19_Jan_24OD_051.jpg", "Bright_Storm_19_Jan_24OD_052.jpg", "Bright_Storm_19_Jan_24OD_053.jpg", "Bright_Storm_19_Jan_24OD_054.jpg", "Bright_Storm_19_Jan_24OD_055.jpg",
                    "Bright_Storm_19_Jan_24OD_056.jpg", "Bright_Storm_19_Jan_24OD_057.jpg", "Bright_Storm_19_Jan_24OD_058.jpg", "Bright_Storm_19_Jan_24OD_059.jpg", "Bright_Storm_19_Jan_24OD_060.jpg",
                    "Bright_Storm_19_Jan_24OD_061.jpg", "Bright_Storm_19_Jan_24OD_062.jpg", "Bright_Storm_19_Jan_24OD_063.jpg", "Bright_Storm_19_Jan_24OD_064.jpg", "Bright_Storm_19_Jan_24OD_065.jpg",
                    "Bright_Storm_19_Jan_24OD_066.jpg", "Bright_Storm_19_Jan_24OD_067.jpg", "Bright_Storm_19_Jan_24OD_068.jpg", "Bright_Storm_19_Jan_24OD_069.jpg", "Bright_Storm_19_Jan_24OD_070.jpg",
                    "Bright_Storm_19_Jan_24OD_071.jpg", "Bright_Storm_19_Jan_24OD_072.jpg", "Bright_Storm_19_Jan_24OD_073.jpg", "Bright_Storm_19_Jan_24OD_074.jpg", "Bright_Storm_19_Jan_24OD_075.jpg",
                    "Bright_Storm_19_Jan_24OD_076.jpg", "Bright_Storm_19_Jan_24OD_077.jpg", "Bright_Storm_19_Jan_24OD_078.jpg", "Bright_Storm_19_Jan_24OD_079.jpg", "Bright_Storm_19_Jan_24OD_080.jpg",
                    "Bright_Storm_19_Jan_24OD_081.jpg", "Bright_Storm_19_Jan_24OD_082.jpg", "Bright_Storm_19_Jan_24OD_083.jpg", "Bright_Storm_19_Jan_24OD_084.jpg", "Bright_Storm_19_Jan_24OD_085.jpg",
                    "Bright_Storm_19_Jan_24OD_086.jpg", "Bright_Storm_19_Jan_24OD_087.jpg", "Bright_Storm_19_Jan_24OD_088.jpg", "Bright_Storm_19_Jan_24OD_089.jpg", "Bright_Storm_19_Jan_24OD_090.jpg",
                    "Bright_Storm_19_Jan_24OD_091.jpg", "Bright_Storm_19_Jan_24OD_092.jpg", "Bright_Storm_19_Jan_24OD_093.jpg", "Bright_Storm_19_Jan_24OD_094.jpg", "Bright_Storm_19_Jan_24OD_095.jpg",
                    "Bright_Storm_19_Jan_24OD_096.jpg", "Bright_Storm_19_Jan_24OD_097.jpg", "Bright_Storm_19_Jan_24OD_098.jpg", "Bright_Storm_19_Jan_24OD_099.jpg", "Bright_Storm_19_Jan_24OD_100.jpg",
                    "Bright_Storm_19_Jan_24OD_101.jpg", "Bright_Storm_19_Jan_24OD_102.jpg", "Bright_Storm_19_Jan_24OD_103.jpg", "Bright_Storm_19_Jan_24OD_104.jpg", "Bright_Storm_19_Jan_24OD_105.jpg",
                    "Bright_Storm_19_Jan_24OD_106.jpg", "Bright_Storm_19_Jan_24OD_107.jpg", "Bright_Storm_19_Jan_24OD_108.jpg", "Bright_Storm_19_Jan_24OD_109.jpg", "Bright_Storm_19_Jan_24OD_110.jpg",
                    "Bright_Storm_19_Jan_24OD_111.jpg", "Bright_Storm_19_Jan_24OD_112.jpg", "Bright_Storm_19_Jan_24OD_113.jpg", "Bright_Storm_19_Jan_24OD_114.jpg", "Bright_Storm_19_Jan_24OD_115.jpg",
                    "Bright_Storm_19_Jan_24OD_116.jpg", "Bright_Storm_19_Jan_24OD_117.jpg", "Bright_Storm_19_Jan_24OD_118.jpg", "Bright_Storm_19_Jan_24OD_119.jpg", "Bright_Storm_19_Jan_24OD_120.jpg"
                ];

                this.sequence3 = [
                    "ezgif-frame-001.jpg", "ezgif-frame-002.jpg", "ezgif-frame-003.jpg", "ezgif-frame-004.jpg", "ezgif-frame-005.jpg",
                    "ezgif-frame-006.jpg", "ezgif-frame-007.jpg", "ezgif-frame-008.jpg", "ezgif-frame-009.jpg", "ezgif-frame-010.jpg",
                    "ezgif-frame-011.jpg", "ezgif-frame-012.jpg", "ezgif-frame-013.jpg", "ezgif-frame-014.jpg", "ezgif-frame-015.jpg",
                    "ezgif-frame-016.jpg", "ezgif-frame-017.jpg", "ezgif-frame-018.jpg", "ezgif-frame-019.jpg", "ezgif-frame-020.jpg",
                    "ezgif-frame-021.jpg", "ezgif-frame-022.jpg", "ezgif-frame-023.jpg", "ezgif-frame-024.jpg", "ezgif-frame-025.jpg",
                    "ezgif-frame-026.jpg", "ezgif-frame-027.jpg", "ezgif-frame-028.jpg", "ezgif-frame-029.jpg", "ezgif-frame-030.jpg",
                    "ezgif-frame-031.jpg", "ezgif-frame-032.jpg", "ezgif-frame-033.jpg", "ezgif-frame-034.jpg", "ezgif-frame-035.jpg",
                    "ezgif-frame-036.jpg", "ezgif-frame-037.jpg", "ezgif-frame-038.jpg", "ezgif-frame-039.jpg", "ezgif-frame-040.jpg",
                    "ezgif-frame-041.jpg", "ezgif-frame-042.jpg", "ezgif-frame-043.jpg", "ezgif-frame-044.jpg", "ezgif-frame-045.jpg",
                    "ezgif-frame-046.jpg", "ezgif-frame-047.jpg", "ezgif-frame-048.jpg", "ezgif-frame-049.jpg", "ezgif-frame-050.jpg",
                    "ezgif-frame-051.jpg", "ezgif-frame-052.jpg", "ezgif-frame-053.jpg", "ezgif-frame-054.jpg", "ezgif-frame-055.jpg",
                    "ezgif-frame-056.jpg", "ezgif-frame-057.jpg", "ezgif-frame-058.jpg", "ezgif-frame-059.jpg", "ezgif-frame-060.jpg",
                    "ezgif-frame-061.jpg", "ezgif-frame-062.jpg", "ezgif-frame-063.jpg", "ezgif-frame-064.jpg", "ezgif-frame-065.jpg",
                    "ezgif-frame-066.jpg", "ezgif-frame-067.jpg", "ezgif-frame-068.jpg", "ezgif-frame-069.jpg", "ezgif-frame-070.jpg",
                    "ezgif-frame-071.jpg", "ezgif-frame-072.jpg", "ezgif-frame-073.jpg", "ezgif-frame-074.jpg", "ezgif-frame-075.jpg",
                    "ezgif-frame-076.jpg", "ezgif-frame-077.jpg", "ezgif-frame-078.jpg", "ezgif-frame-079.jpg", "ezgif-frame-080.jpg"
                ];

                this.sequence4 = [
                    "ezgif-frame-001.jpg", "ezgif-frame-002.jpg", "ezgif-frame-003.jpg", "ezgif-frame-004.jpg", "ezgif-frame-005.jpg",
                    "ezgif-frame-006.jpg", "ezgif-frame-007.jpg", "ezgif-frame-008.jpg", "ezgif-frame-009.jpg", "ezgif-frame-010.jpg",
                    "ezgif-frame-011.jpg", "ezgif-frame-012.jpg", "ezgif-frame-013.jpg", "ezgif-frame-014.jpg", "ezgif-frame-015.jpg",
                    "ezgif-frame-016.jpg", "ezgif-frame-017.jpg", "ezgif-frame-018.jpg", "ezgif-frame-019.jpg", "ezgif-frame-020.jpg",
                    "ezgif-frame-021.jpg", "ezgif-frame-022.jpg", "ezgif-frame-023.jpg", "ezgif-frame-024.jpg", "ezgif-frame-025.jpg",
                    "ezgif-frame-026.jpg", "ezgif-frame-027.jpg", "ezgif-frame-028.jpg", "ezgif-frame-029.jpg", "ezgif-frame-030.jpg",
                    "ezgif-frame-031.jpg", "ezgif-frame-032.jpg", "ezgif-frame-033.jpg", "ezgif-frame-034.jpg", "ezgif-frame-035.jpg",
                    "ezgif-frame-036.jpg", "ezgif-frame-037.jpg", "ezgif-frame-038.jpg", "ezgif-frame-039.jpg", "ezgif-frame-040.jpg",
                    "ezgif-frame-041.jpg", "ezgif-frame-042.jpg", "ezgif-frame-043.jpg", "ezgif-frame-044.jpg", "ezgif-frame-045.jpg",
                    "ezgif-frame-046.jpg", "ezgif-frame-047.jpg", "ezgif-frame-048.jpg", "ezgif-frame-049.jpg", "ezgif-frame-050.jpg",
                    "ezgif-frame-051.jpg", "ezgif-frame-052.jpg", "ezgif-frame-053.jpg", "ezgif-frame-054.jpg", "ezgif-frame-055.jpg",
                    "ezgif-frame-056.jpg", "ezgif-frame-057.jpg", "ezgif-frame-058.jpg", "ezgif-frame-059.jpg", "ezgif-frame-060.jpg",
                    "ezgif-frame-061.jpg", "ezgif-frame-062.jpg", "ezgif-frame-063.jpg", "ezgif-frame-064.jpg", "ezgif-frame-065.jpg",
                    "ezgif-frame-066.jpg", "ezgif-frame-067.jpg", "ezgif-frame-068.jpg", "ezgif-frame-069.jpg", "ezgif-frame-070.jpg",
                    "ezgif-frame-071.jpg", "ezgif-frame-072.jpg", "ezgif-frame-073.jpg", "ezgif-frame-074.jpg"
                ];

                this.sequences = {
                    'sequence1': [],
                    'sequence2': [],
                    'sequence3': [],
                    'sequence4': []
                };

                this.currentSequence = 'sequence1';
                this.currentFrame = 0;
                this.totalFrames = 0;
                this.isLoaded = false;

                // Scroll tracking
                this.scrollProgress = 0;
                this.lastScrollY = 0;

                this.init();
            }

            async init() {
                await this.loadImages();
                this.hidePreloader();
                this.setupEventListeners();
                this.animate();
            }

            resizeCanvas() {
                if (!this.canvas) return;
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }

            async loadImages() {
                // Load images for sequence1
                for (const filename of this.sequence1) {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    try {
                        await this.loadImagePromise(img, `${CONFIG.sequencePaths['sequence1']}${filename}`);
                        this.sequences['sequence1'].push(img);
                    } catch (error) {
                        console.warn(`Failed to load image: ${CONFIG.sequencePaths['sequence1']}${filename}`, error);
                        break; // Stop if an image fails to load
                    }
                }

                // Load images for sequence2
                for (const filename of this.sequence2) {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    try {
                        await this.loadImagePromise(img, `${CONFIG.sequencePaths['sequence2']}${filename}`);
                        this.sequences['sequence2'].push(img);
                    } catch (error) {
                        console.warn(`Failed to load image: ${CONFIG.sequencePaths['sequence2']}${filename}`, error);
                        break; // Stop if an image fails to load
                    }
                }

                // Load images for sequence3
                for (const filename of this.sequence3) {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    try {
                        await this.loadImagePromise(img, `${CONFIG.sequencePaths['sequence3']}${filename}`);
                        this.sequences['sequence3'].push(img);
                    } catch (error) {
                        console.warn(`Failed to load image: ${CONFIG.sequencePaths['sequence3']}${filename}`, error);
                        break; // Stop if an image fails to load
                    }
                }

                // Load images for sequence4
                for (const filename of this.sequence4) {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    try {
                        await this.loadImagePromise(img, `${CONFIG.sequencePaths['sequence4']}${filename}`);
                        this.sequences['sequence4'].push(img);
                    } catch (error) {
                        console.warn(`Failed to load image: ${CONFIG.sequencePaths['sequence4']}${filename}`, error);
                        break; // Stop if an image fails to load
                    }
                }

                this.totalFrames = Math.max(
                    this.sequences['sequence1'].length,
                    this.sequences['sequence2'].length,
                    this.sequences['sequence3'].length,
                    this.sequences['sequence4'].length
                );

                this.isLoaded = true;
            }

            loadImagePromise(img, url) {
                return new Promise((resolve, reject) => {
                    // Add timeout to prevent hanging requests
                    const timeout = setTimeout(() => {
                        reject(new Error(`Timeout loading image: ${url}`));
                    }, 10000); // 10 second timeout

                    img.onload = () => {
                        clearTimeout(timeout);
                        resolve(img);
                    };
                    img.onerror = () => {
                        clearTimeout(timeout);
                        reject(new Error(`Failed to load image: ${url}`));
                    };

                    // Add referrerpolicy for GitHub Pages compatibility
                    img.referrerpolicy = 'no-referrer';
                    img.src = url;
                });
            }

            hidePreloader() {
                setTimeout(() => {
                    setShowPreloader(false);
                }, 500);
            }

            setupEventListeners() {
                // Optimize resize event handling for mobile
                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        this.resizeCanvas();
                    }, 100);
                });

                // Throttle scroll events for better performance on mobile
                let scrollTimeout;
                window.addEventListener('scroll', () => {
                    if (!scrollTimeout) {
                        scrollTimeout = setTimeout(() => {
                            this.updateScrollProgress();
                            scrollTimeout = null;
                        }, 16); // ~60fps
                    }
                });

                // Add touch event listeners for better mobile experience
                window.addEventListener('touchstart', () => {}, { passive: true });
                window.addEventListener('touchmove', () => {}, { passive: true });
                window.addEventListener('touchend', () => {}, { passive: true });
            }

            updateScrollProgress() {
                const scrollY = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                this.scrollProgress = Math.max(0, Math.min(1, scrollY / documentHeight));
            }

            getCurrentSequenceAndFrame() {
                const progress = this.scrollProgress;

                if (progress < 0.25) {
                    // sequence1: 0% to 25% - Ingredients
                    const sequenceProgress = progress / 0.25;
                    const frameIndex = Math.floor(sequenceProgress * (this.sequences['sequence1'].length - 1));
                    return { sequence: 'sequence1', frame: Math.max(0, Math.min(frameIndex, this.sequences['sequence1'].length - 1)) };
                } else if (progress < 0.5) {
                    // sequence2: 25% to 50% - Chocolate Flow
                    const sequenceProgress = (progress - 0.25) / 0.25;
                    const frameIndex = Math.floor(sequenceProgress * (this.sequences['sequence2'].length - 1));
                    return { sequence: 'sequence2', frame: Math.max(0, Math.min(frameIndex, this.sequences['sequence2'].length - 1)) };
                } else if (progress < 0.75) {
                    // sequence3: 50% to 75% - Wafer Formation
                    const sequenceProgress = (progress - 0.5) / 0.25;
                    const frameIndex = Math.floor(sequenceProgress * (this.sequences['sequence3'].length - 1));
                    return { sequence: 'sequence3', frame: Math.max(0, Math.min(frameIndex, this.sequences['sequence3'].length - 1)) };
                } else {
                    // sequence4: 75% to 100% - Final Pack
                    const sequenceProgress = (progress - 0.75) / 0.25;
                    const frameIndex = Math.floor(sequenceProgress * (this.sequences['sequence4'].length - 1));
                    return { sequence: 'sequence4', frame: Math.max(0, Math.min(frameIndex, this.sequences['sequence4'].length - 1)) };
                }
            }

            updateOverlays(currentSequence) {
                setActiveOverlay(currentSequence);

                // Handle CTA button visibility
                if (currentSequence === 'sequence4' && this.scrollProgress > 0.95) {
                    setShowCta(true);
                } else {
                    setShowCta(false);
                }
            }

            drawCurrentFrame() {
                if (!this.isLoaded || !this.canvas || !this.ctx) return;

                const { sequence, frame } = this.getCurrentSequenceAndFrame();
                const currentImg = this.sequences[sequence][frame];

                if (currentImg) {
                    // Clear canvas
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                    // Calculate aspect ratio to fit image while maintaining proportions
                    const imgRatio = currentImg.width / currentImg.height;
                    const canvasRatio = this.canvas.width / this.canvas.height;

                    let drawWidth, drawHeight, offsetX, offsetY;

                    if (imgRatio > canvasRatio) {
                        // Image is wider than canvas - fit to width
                        drawWidth = this.canvas.width;
                        drawHeight = this.canvas.width / imgRatio;
                        offsetX = 0;
                        offsetY = (this.canvas.height - drawHeight) / 2;
                    } else {
                        // Image is taller than canvas - fit to height
                        drawHeight = this.canvas.height;
                        drawWidth = this.canvas.height * imgRatio;
                        offsetX = (this.canvas.width - drawWidth) / 2;
                        offsetY = 0;
                    }

                    // Draw image centered with object-contain behavior
                    this.ctx.drawImage(currentImg, offsetX, offsetY, drawWidth, drawHeight);
                }

                // Update overlays
                this.updateOverlays(sequence);
            }

            animate() {
                this.updateScrollProgress();
                this.drawCurrentFrame();
                requestAnimationFrame(() => this.animate());
            }
        }

        new ScrollytellingAnimation();

        // Hamburger menu functionality
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        const toggleMenu = () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        };

        hamburger?.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navMenu?.contains(event.target) && !hamburger?.contains(event.target)) {
                navMenu?.classList.remove('active');
                hamburger?.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links with mobile optimization
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - 100; // Adjust for header height

                    // Check if smooth scrolling is supported and if it's a mobile device
                    const isMobile = window.matchMedia('(max-width: 768px)').matches;

                    if ('scrollBehavior' in document.documentElement.style && !isMobile) {
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    } else {
                        // Fallback for older browsers and mobile devices
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'auto'
                        });

                        // On mobile, ensure the element is properly positioned after scroll
                        if (isMobile) {
                            setTimeout(() => {
                                const newTargetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                                const newOffsetPosition = newTargetPosition - 100;
                                window.scrollTo({top: newOffsetPosition, behavior: 'auto'});
                            }, 100);
                        }
                    }
                }
            });
        });

        // Cleanup function
        return () => {
            // Remove event listeners to prevent memory leaks
            hamburger?.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <div className="main-container">
            {/* Preloader */}
            {showPreloader && (
                <div className={`preloader ${showPreloader ? '' : 'hidden'}`}>
                    <div className="loading-text">Loading Experience...</div>
                </div>
            )}

            <header>
                <div className="brand-name">Frisky</div>
                <nav>
                    <div className="nav-menu" id="nav-menu">
                        <ul>
                            <li><a href="#product">Collection</a></li>
                            <li><a href="#story">Heritage</a></li>
                            <li><a href="https://www.linkedin.com/in/bisma-razzaq786/" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        </ul>
                    </div>
                    <div className="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            <canvas ref={canvasRef} id="animationCanvas"></canvas>
            <div className="canvas-overlay"></div>

            {/* Anchor points for navigation */}
            <div id="story" style={{ position: 'absolute', top: '10%', width: '100%', height: '1px' }}></div>
            <div id="product" style={{ position: 'absolute', top: '90%', width: '100%', height: '1px' }}></div>

            {/* Text Overlays */}
            <div className={`text-overlay ${activeOverlay === 'sequence1' ? 'active' : ''}`} id="overlay1">
                <h1 className="headline">{CONFIG.overlayTexts['sequence1'].headline}</h1>
                <p className="subtext">{CONFIG.overlayTexts['sequence1'].subtext}</p>
            </div>

            <div className={`text-overlay ${activeOverlay === 'sequence2' ? 'active' : ''}`} id="overlay2">
                <h1 className="headline">{CONFIG.overlayTexts['sequence2'].headline}</h1>
                <p className="subtext">{CONFIG.overlayTexts['sequence2'].subtext}</p>
            </div>

            <div className={`text-overlay ${activeOverlay === 'sequence3' ? 'active' : ''}`} id="overlay3">
                <h1 className="headline">{CONFIG.overlayTexts['sequence3'].headline}</h1>
                <p className="subtext">{CONFIG.overlayTexts['sequence3'].subtext}</p>
            </div>

            <div className={`text-overlay ${activeOverlay === 'sequence4' ? 'active' : ''}`} id="overlay4">
                <h1 className="headline">{CONFIG.overlayTexts['sequence4'].headline}</h1>
                <p className="subtext">{CONFIG.overlayTexts['sequence4'].subtext}</p>
                <div className="cta-wrapper">
                    <a
                        href="https://www.foodpanda.pk/groceries/product/r1vf-1831/innovative-frisky-rolls-hazelnut-family-pack-box"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cta-button ${showCta ? 'show' : ''}`}
                    >
                        Experience Frisky
                    </a>
                </div>
            </div>

            <footer>
                <div className="tagline">Frisky Chocolate Excellence</div>
                <div className="copyright">© 2026 Frisky. All rights reserved.</div>
                <div className="built-by">Crafted with precision by Bisma 💗</div>
            </footer>
        </div>
    );
}