"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Projects",          id: "projects"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Al-Tiraz Engineering"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Transforming Spaces Into Purposeful Design"
      description="Explore our award-quality architecture across residential, commercial, and mixed-use developments. See how we've shaped communities and delivered lasting value to our clients."
      buttons={[
        {
          text: "View Our Portfolio",          href: "#projects"},
      ]}
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/modern-skyscrapers-with-windows_23-2148836738.jpg",          imageAlt: "Modern Commercial Skyscraper"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-textured-facade-modern-building_181624-16993.jpg",          imageAlt: "Luxury Residential Villa"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-business-meeting-working-room-office-building_105762-1972.jpg",          imageAlt: "Commercial Office Interior"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/architectural-marvel-with-lush-greenery-sustainable-design_23-2151990792.jpg",          imageAlt: "Apartment Complex"},
        {
          id: "5",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779522866809-y300g1cr.png",          imageAlt: "Mixed-Use Lounge"},
        {
          id: "6",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523216722-8j4wb9y0.jpg",          imageAlt: "Urban Infrastructure"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Al-Tiraz Engineering:"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/business-people-looking-plans-office_23-2148017110.jpg",          alt: "Al-Tiraz Engineering Studio"},
        {
          type: "text",          content: "Defining Architectural Standards."},
      ]}
    />
  </div>

  <div id="projects" data-section="projects">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Tourist resort",          price: "Mixed-Use",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523305265-535g7021.jpg"},
        {
          id: "p2",          name: "Modern House",          price: "Residential",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523360023-0humvnjc.jpg"},
        {
          id: "p3",          name: "Interior Design",          price: "Residential",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523571238-lqlz2sok.jpg"},
        {
          id: "p4",          name: "Rooftop terrace",          price: "Residential",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523646707-nqgbxh7x.jpg"},
        {
          id: "p5",          name: "Public Transit Hub",          price: "Residential",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-loft-luxury-living-room-with-design-chandelier_105762-2226.jpg"},
        {
          id: "p6",          name: "Indoor Garden Design",          price: "Residential",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E7GgnBGXNvhfaU0AfL11xLtTb6/uploaded-1779523686573-zluw9in7.jpg"},
      ]}
      title="Our Projects"
      description="Selected architectural design highlights across Iraq and beyond."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Commercial Planning",          description: "High-impact designs for modern commercial requirements.",          imageSrc: "http://img.b2bpic.net/free-photo/bird-s-eye-view-shanghai_1127-3999.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/anime-style-house-structure_23-2151064746.jpg",          buttonText: "Learn More"},
        {
          title: "Residential Design",          description: "Custom homes that blend aesthetic with functionality.",          imageSrc: "http://img.b2bpic.net/free-photo/young-person-holding-small-house-hand_1048-17805.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-high-protein-vegan-meal_23-2149091316.jpg",          buttonText: "Learn More"},
        {
          title: "Urban Infrastructure",          description: "Sustainable projects shaping the future of our communities.",          imageSrc: "http://img.b2bpic.net/free-photo/abandoned-greenhouse-armenia_181624-24608.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/construction-site-with-tower-crane-apartments-urban-modern-architecture_169016-69092.jpg",          buttonText: "Learn More"},
      ]}
      title="Our Expertise"
      description="We specialize in integrated design solutions from conceptualization to completion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Ali Hassan",          imageSrc: "http://img.b2bpic.net/free-photo/upper-angle-view-happy-beautiful-woman-holding-smartphone-sitting-home-having-break-from-work_1258-199926.jpg"},
        {
          id: "2",          name: "Sarah Ahmed",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-man-showing-draft-woman_23-2147807973.jpg"},
        {
          id: "3",          name: "Mustafa Kareem",          imageSrc: "http://img.b2bpic.net/free-photo/image-cheerful-curly-haired-woman-holds-paint-brush-roller-refurbishes-walls-red-color-dressed-casual-wear_273609-38580.jpg"},
        {
          id: "4",          name: "Layla Saeed",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-person-conference-room_23-2149085944.jpg"},
        {
          id: "5",          name: "Omar Fakhri",          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081853.jpg"},
      ]}
      cardTitle="Client Voices"
      cardAnimation="slide-up"
      cardTag="Testimonials"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "150+",          description: "Completed Projects"},
        {
          id: "m2",          value: "12",          description: "Industry Awards"},
        {
          id: "m3",          value: "20+",          description: "Years Experience"},
      ]}
      title="Our Impact"
      description="Evidence-based architectural excellence."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How do we start a project?",          content: "Contact us to schedule a site analysis and briefing session."},
        {
          id: "2",          title: "Do you work with commercial clients?",          content: "Yes, we specialize in high-end commercial master planning."},
        {
          id: "3",          title: "Are your designs sustainable?",          content: "Sustainability is at the core of all our architectural solutions."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-drawing-architectural-project_23-2148243003.jpg"
      mediaAnimation="slide-up"
      title="FAQs"
      description="Everything you need to know about starting your project with Al-Tiraz."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Basra, Iraq"
      title="Visit Our Office"
      description="Located in the heart of Basra, Iraq. Reach out anytime via phone or email."
      buttonText="Call Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Links",          items: [
            {
              label: "Portfolio",              href: "#projects"},
            {
              label: "About",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "07809643243",              href: "tel:07809643243"},
            {
              label: "07713169395",              href: "tel:07713169395"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "https://www.instagram.com/altiraz_eng/"},
          ],
        },
      ]}
      logoText="Al-Tiraz Engineering"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
