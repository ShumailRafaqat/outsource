export type WebsiteArticle = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  visual: string;
  image: string;
  imageAlt: string;
  time: string;
  datePublished: string;
  author: string;
  introduction?: string[];
  sections: { title: string; body: string; items?: string[] }[];
  closing?: {
    title: string;
    body: string;
    checklistTitle: string;
    checklistIntro?: string;
    checklist: string[];
    ctaLabel: string;
  };
};

export const websiteArticles: WebsiteArticle[] = [
  {
    slug: "they-heard-about-you-then-they-googled-you",
    category: "STRATEGY",
    title: "They Heard About You. Then They Googled You.",
    summary:
      "A recommendation gets your name into the conversation. Your website helps people decide whether to take that conversation further.",
    visual: "strategy",
    image: "/insight-strategy.webp",
    imageAlt: "A prospective customer exploring a business website on desktop and mobile screens",
    time: "6 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    introduction: [
      "Someone mentions your business to a friend. They sound interested, save your name, and look you up later. Before they call, they want to see what you offer, whether you understand their needs, and what working with you might look like.",
      "What they find can make that next step easier—or leave them searching for answers. A useful website brings your services, work, and contact details together, giving potential customers a clearer reason to get in touch.",
    ],
    sections: [
      {
        title: "The First Visit Often Happens Before the First Conversation",
        body: "When someone contacts you, they may already have spent time researching your business.\n\nThey might have checked your services, looked for examples, compared your approach with another provider, or tried to understand whether you handle projects like theirs. Your website participates in that decision even when your team is not involved yet.\n\nImagine a homeowner who receives your name from a neighbour. The recommendation creates confidence, but they still have practical questions. Do you handle their type of renovation? Do you work in their area? Can they see completed projects? How does an estimate work?\n\nA website that answers these questions gives the recommendation somewhere useful to lead.",
      },
      {
        title: "Scattered Information Creates Unnecessary Work",
        body: "Many businesses already have an online presence, but the information is spread across several places.\n\nService details appear in old social posts. Project photographs sit in a gallery without explanations. Opening hours differ between profiles. A phone number exists, but visitors cannot tell whether it is current.\n\nEach missing or conflicting detail adds another task for the person researching you.\n\nYour website can provide a central reference point: a place where visitors can find an accurate explanation of the business without assembling it themselves. Keep essential information consistent with your social profiles and business listings so people are not left deciding which version to trust.",
      },
      {
        title: "Help Visitors Recognise That You Serve People Like Them",
        body: "A broad list of services does not always help someone identify whether you are the right fit.\n\n“Business support” could mean many things. “Bookkeeping and payroll support for growing service businesses” gives the visitor a clearer starting point.\n\nYour website should explain the situations you help with, the types of work you take on, and any meaningful limitations. If you serve particular areas, business sizes, or project types, make that information easy to find.\n\nBeing specific helps suitable customers recognise themselves in your offer. It can also reduce enquiries for work you do not provide.",
      },
      {
        title: "Show What Your Work Means in Practice",
        body: "People need more than a claim that you deliver quality.\n\nA project example can show how you approach a real need. Explain the starting situation, what you were responsible for, and what you delivered. Where you have reliable evidence of an outcome, include it with enough context to be meaningful.\n\nA catering company might show how it planned service for an event with dietary requirements. A development agency might explain how it simplified a complicated booking journey.\n\nThe purpose is to help visitors imagine what your expertise could look like in their own situation. Use genuine examples and clearly label any demonstration or concept work.",
      },
      {
        title: "Give Every Source of Interest a Useful Destination",
        body: "People may discover your business through referrals, social media, local listings, printed materials, or advertising.\n\nThese introductions do not all carry the same amount of information. A social post might highlight one result. A business card may contain only your name and contact details. A recommendation may explain why someone enjoyed working with you.\n\nYour website can provide the fuller picture.\n\nWhere possible, direct people to the page most relevant to their interest. A post about a specific service should lead to useful information about that service, rather than making visitors search through the entire website.",
      },
      {
        title: "Make Contact Feel Like a Natural Next Step",
        body: "Once visitors understand your offer, they should know how to continue.\n\nDifferent businesses need different actions. A restaurant might prioritise reservations and directions. A consultant might offer a project enquiry. A local service company might make calling or requesting an estimate the most useful option.\n\nExplain what happens after the action. Will someone respond by email? Is the appointment confirmed immediately or subject to availability? What information should the visitor prepare?\n\nThese details reduce uncertainty and help people begin the conversation with realistic expectations.",
      },
      {
        title: "A Website Needs a Way to Be Found",
        body: "Publishing a website does not automatically create visibility.\n\nPeople still need routes to it. Add the address to relevant business profiles, social accounts, email signatures, and materials your customers already see. Build useful service content and keep your business information accurate.\n\nThink of the website as part of your customer journey. Its role is to support the interest your business generates and help people explore it further.\n\nThe important question is not simply whether your business has a website. It is whether someone who hears your name can find enough useful information to move forward.",
      },
    ],
    closing: {
      title: "Give a Good Recommendation Somewhere to Lead",
      body: "When someone is already interested, your website should help that interest develop. Clear services, relevant examples, and an obvious next step can turn a name they have heard into a business they understand.",
      checklistTitle: "A Quick Check for Your Business",
      checklist: [
        "What does this business offer?",
        "Who is the service suitable for?",
        "Does it serve my location or type of project?",
        "What evidence can I see of its work?",
        "How do I take the next step?",
      ],
      ctaLabel: "Discuss Your Website",
    },
  },
  {
    slug: "looks-impressive-but-what-do-you-actually-do",
    category: "CLEAR MESSAGING",
    title: "Looks Impressive. But What Do You Actually Do?",
    summary:
      "Beautiful design earns attention. Clear messaging helps visitors understand your offer, recognise its value, and decide what to do next.",
    visual: "messaging",
    image: "/beautiful.png",
    imageAlt: "A polished business website displayed across responsive device mockups",
    time: "7 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    introduction: [
      "A visitor opens your homepage and sees elegant visuals, smooth animation, and a confident headline. But after scrolling, they still cannot explain what you sell, who it is for, or how it would help them.",
      "This is where an attractive website can lose its purpose. Every section should answer a useful question, from “Is this relevant to me?” to “What happens if I contact you?” Clear content gives the design something meaningful to communicate.",
    ],
    sections: [
      {
        title: "Your Opening Message Should Give Visitors Their Bearings",
        body: "People arrive with different levels of knowledge. Some already know your business. Others have opened a link with very little context.\n\nYour opening section should help both groups understand where they are.\n\nA headline can have personality, but the surrounding description needs to explain the offer. “Built for What’s Next” might sound confident, yet it does not tell a visitor whether you provide software, recruitment, accounting, or construction.\n\nPair an expressive headline with a concrete explanation. State what you do, who you help, and the practical need you address. Visitors should not have to scroll through several sections to uncover the basics.",
      },
      {
        title: "Write Around the Customer’s Situation",
        body: "Businesses often describe their services from an internal perspective: departments, tools, capabilities, or industry terminology.\n\nCustomers usually begin with a situation.\n\nThey may be receiving enquiries they cannot manage, running a website that is difficult to update, or spending hours repeating administrative tasks. Content becomes easier to understand when it connects your service to that starting point.\n\nFor example, “Custom workflow automation” names a capability. Explaining that it can move enquiry details into the right system and notify the responsible team shows how that capability might help.\n\nUse examples that reflect what you actually deliver, without suggesting every customer will achieve the same outcome.",
      },
      {
        title: "Give Each Service Its Own Explanation",
        body: "A row of service names can help visitors browse, but it rarely gives them enough information to decide.\n\nA detailed service page should explain:",
        items: [
          "The situations the service is designed for.",
          "What the work usually includes.",
          "Which parts depend on the agreed scope.",
          "What information or access you need.",
          "How the project or engagement progresses.",
          "What the client receives.",
        ],
      },
      {
        title: "Turn Features Into Understandable Value",
        body: "Technical details can be useful, particularly when buyers need to compare options. But a feature becomes more meaningful when its practical role is clear.\n\nAn editable content system means a team can update approved parts of the website without requesting every change from a developer. A booking integration can help visitors choose an available appointment through a connected process.\n\nAvoid attaching a dramatic benefit to every feature. Explain the relationship honestly, including conditions or limitations where they matter.\n\nThe aim is to help people understand why a capability exists and whether it is useful for their business.",
      },
      {
        title: "Give Every Section a Different Job",
        body: "Content becomes repetitive when every section makes the same promise using different words.\n\nA stronger page follows the visitor’s decision:",
        items: [
          "The opening explains the offer.",
          "The problem section helps visitors recognise their situation.",
          "Service details explain what you provide.",
          "Process content explains how the work happens.",
          "Examples provide evidence.",
          "FAQs address remaining concerns.",
          "The final action explains how to begin.",
        ],
      },
      {
        title: "Make the Page Easy to Scan Without Making It Shallow",
        body: "Many visitors scan before they commit to reading.\n\nUseful headings should communicate the subject of the section, rather than simply announce “Our Excellence” or “Our Difference.” Short paragraphs make detailed information more approachable. Lists work well for genuinely parallel information, such as inclusions or requirements.\n\nPut the most useful explanation near the beginning of each section. Readers should be able to understand the main point quickly and continue into the detail if it matters to them.\n\nA page can be substantial and still feel clear when the information is organised thoughtfully.",
      },
      {
        title: "Use Buttons That Explain the Next Step",
        body: "A button creates an expectation.\n\n“View Our Work” suggests examples. “Request an Estimate” suggests an enquiry process. “Book a Consultation” suggests scheduling. The destination should match that promise.\n\nGeneric labels can work when the context is obvious, but repeated “Learn More” buttons may make a page harder to navigate, especially when several services appear together.\n\nChoose actions based on what visitors are ready to do at that point. Someone still comparing services may need more information before they are comfortable booking a conversation.",
      },
    ],
    closing: {
      title: "Make Your Expertise Easier to Understand",
      body: "Your business may offer excellent work, but visitors need a clear explanation before they can appreciate it. Useful messaging connects your capabilities to their situation and gives every part of the page a purpose.",
      checklistTitle: "A Quick Clarity Check",
      checklistIntro: "Ask a person outside your business to read the page and explain:",
      checklist: [
        "What you provide.",
        "Who it helps.",
        "Why someone would need it.",
        "What is included.",
        "What happens next.",
      ],
      ctaLabel: "Let’s Clarify Your Website",
    },
  },
  {
    slug: "they-clicked-they-waited-did-they-stay",
    category: "PERFORMANCE",
    title: "They Clicked. They Waited. Did They Stay?",
    summary:
      "A slow website can interrupt interest before your offer gets a chance. Loading speed, responsive controls, and stable layouts all shape the experience.",
    visual: "speed",
    image: "/insight-performance.webp",
    imageAlt: "Web development team reviewing a website together in a bright studio",
    time: "8 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    introduction: [
      "Someone clicks through to your website, ready to explore. The main image takes time to appear, the menu hesitates, and a late-loading banner moves the button they were about to tap.",
      "Performance is about how confidently people can use your website from the moment they arrive. Understanding what causes delays helps you improve the experience without removing everything that makes the design distinctive.",
    ],
    sections: [
      {
        title: "Loading Is Only One Part of Performance",
        body: "A page can appear quickly and still feel slow.\n\nVisitors may see the content but find that the menu takes time to open or the form responds unevenly while they type. In other cases, interactions work well, but the layout keeps moving as images and embedded content arrive.\n\nThree useful questions help separate these problems:",
        items: [
          "How soon does the important content become visible?",
          "How quickly does the page respond to an action?",
          "Does the layout remain stable while the page loads?",
        ],
      },
      {
        title: "Heavy Visuals Can Delay the Content People Came For",
        body: "Large images and videos often contribute substantial download weight.\n\nA photograph prepared for print may be much larger than the space where it appears online. Sending that full file to every visitor can waste bandwidth, particularly on smaller screens.\n\nImages should be sized and compressed appropriately, with suitable versions delivered for different display sizes. Important opening imagery needs careful prioritisation, while media further down the page can often wait until it is needed.\n\nVideo needs similar consideration. A large autoplay background may look impressive, but it should not prevent visitors from understanding the offer or interacting with the page. A lightweight preview and deliberate playback can be more appropriate in some contexts.",
      },
      {
        title: "Too Many Scripts Can Make the Page Feel Unresponsive",
        body: "Websites often accumulate tools over time: analytics, chat widgets, booking systems, advertising tags, animations, and embedded social content.\n\nEach can add downloads and processing work. Some scripts compete with the work the browser needs to do to respond to taps, scrolling, and typing.\n\nReview what each integration contributes. Remove unused tools and avoid loading functionality on pages where it is not needed. Where appropriate, defer work until the visitor requests it.\n\nThe aim is to make deliberate choices. A useful integration may justify its cost, but a forgotten plugin should not continue slowing the experience.",
      },
      {
        title: "Unexpected Movement Can Cause Real Mistakes",
        body: "Layout shifts happen when visible elements move after the page begins displaying.\n\nAn image may load without reserved space. A banner may be inserted above the content. A font change may alter the size of a heading. A visitor can lose their reading position or tap a different control from the one they intended.\n\nReserve appropriate space for images, video, and embeds. Plan how notices and dynamic content appear. Check font loading and avoid unnecessary changes above content the visitor is already using.\n\nA stable layout helps people interact with confidence.",
      },
      {
        title: "Hosting and Server Work Affect the Starting Point",
        body: "Before a browser can display your page, it needs a response from the systems delivering it.\n\nSlow server processing, inefficient database queries, or poorly configured delivery can delay that response. This is especially important for websites that generate content dynamically, such as shops, dashboards, and booking systems.\n\nCaching and content delivery services may improve appropriate parts of the site, but they need careful configuration. Personalised information, shopping carts, and other user-specific content must be handled correctly.\n\nDiagnose the source of the delay before choosing a solution. A hosting upgrade will not necessarily fix excessive browser processing, and image compression will not resolve an inefficient backend request.",
      },
      {
        title: "Animation Should Support the Experience",
        body: "Motion can guide attention and make a website feel considered. It can also introduce delays when important content is hidden behind long entrance sequences or when effects perform too much work during scrolling.\n\nKeep key information available promptly. Use motion selectively, test it on less powerful devices, and respect reduced-motion preferences.\n\nCheck whether an effect helps the visitor understand the page. If it makes reading, navigation, or interaction harder, its implementation needs reconsideration.\n\nPerformance and visual quality can work together when movement is designed around the content.",
      },
      {
        title: "Test Real Journeys Under Different Conditions",
        body: "A fast homepage does not guarantee a fast website.\n\nProduct filters, service pages, search, forms, and checkout may use different resources and behave differently. Test the routes that matter to your business, including transitions between pages and interactions after the initial load.\n\nControlled tests help diagnose problems under repeatable conditions. Real-user measurements, where available and collected appropriately, show how visitors experience the site across devices and connections.\n\nA score is a useful signal, but the underlying problem matters more than the number alone.",
      },
      {
        title: "Keep Performance From Slipping Over Time",
        body: "Performance can deteriorate gradually as new images, scripts, sections, and integrations are added.\n\nSet practical limits for media and review important changes before release. Give the team guidance on uploading images and introducing new third-party tools. Recheck key journeys after major updates.\n\nThis makes performance part of routine website care instead of a one-time clean-up.",
      },
    ],
    closing: {
      title: "Make the Visit Feel as Good as the Design Looks",
      body: "People should be able to explore your business without waiting through avoidable delays or fighting the interface. A thoughtful performance review identifies what is getting in their way and where improvements will matter most.",
      checklistTitle: "A Quick Performance Check",
      checklistIntro: "Try your website on an ordinary phone and a slower connection:",
      checklist: [
        "Does useful content appear promptly?",
        "Do menus and buttons respond when tapped?",
        "Does anything move unexpectedly?",
        "Can you type smoothly into forms?",
        "Are deeper pages as comfortable to use as the homepage?",
      ],
      ctaLabel: "Discuss Your Website’s Performance",
    },
  },
  {
    slug: "your-website-looks-great-on-your-laptop-what-about-their-phone",
    category: "MOBILE EXPERIENCE",
    title: "Your Website Looks Great on Your Laptop. What About Their Phone?",
    summary:
      "A smaller screen changes how people read, navigate, and enquire. Your website needs to adapt the whole experience—not just the layout.",
    visual: "mobile",
    image: "/insight-mobile-design.webp",
    imageAlt: "Responsive website interfaces displayed on phones, tablets, and desktop screens",
    time: "9 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    introduction: [
      "On your laptop, every section feels balanced. On a customer’s phone, the headline wraps awkwardly, the menu covers the contact button, and a floating widget sits over the form.",
      "These problems are easy to miss when a website is reviewed mainly on desktop. A responsive website keeps content understandable and important actions usable across different screens, input methods, and browsing conditions.",
    ],
    sections: [
      {
        title: "Fitting the Screen Is the Beginning",
        body: "A page can avoid horizontal scrolling and still be difficult to use.\n\nText may be too small. A large hero section may push useful information far down the page. Cards may become so tall that comparing services feels tedious. Buttons may fit visually but remain difficult to tap accurately.\n\nResponsive design needs to consider what happens to the content and the task as available space changes.\n\nThe objective is to preserve the meaning, priorities, and functionality of the page while adapting its presentation.",
      },
      {
        title: "Keep the Most Useful Information Easy to Reach",
        body: "Desktop layouts often display several elements together. On mobile, those elements usually stack vertically, which changes the order in which visitors encounter them.\n\nThat order matters.\n\nIf a long decorative section appears before the service explanation, a visitor may have to scroll extensively to understand the offer. If important conditions are separated from the action they relate to, the process can become confusing.\n\nReview the mobile reading order deliberately. Keep related information together and ensure the main explanation appears before details that depend on it.\n\nEssential content should remain available across devices, even when its presentation changes.",
      },
      {
        title: "Navigation Needs to Work With Touch",
        body: "A desktop menu may depend on hovering, a wide header, or several visible navigation levels. Those patterns need appropriate alternatives on touchscreens.\n\nA mobile menu should open predictably, display readable labels, and provide an obvious way to close it. Submenus should be easy to expand without accidentally following the wrong link.\n\nVisitors should also be able to navigate with a keyboard where supported. Opening and closing the menu should manage focus sensibly and avoid leaving people trapped or disoriented.\n\nTest navigation as a working component, not only as a screenshot.",
      },
      {
        title: "Text and Touch Targets Need Breathing Room",
        body: "When content becomes cramped, both reading and interaction suffer.\n\nChoose text sizes, line spacing, and content widths that remain comfortable on smaller displays. Avoid placing long paragraphs over busy imagery, especially when the mobile crop changes the background behind the words.\n\nLinks and controls need enough space to reduce accidental taps. A row of tiny icons may look tidy while being awkward to use.\n\nAlso check what happens when users enlarge text. A flexible layout should accommodate that preference without cutting off information or hiding controls.",
      },
      {
        title: "Forms Need Their Own Mobile Review",
        body: "Forms often reveal problems that are not visible elsewhere.\n\nThe on-screen keyboard reduces the available viewing area. Browser autofill may change field values. Date selectors, dropdowns, and validation messages can behave differently across devices.\n\nUse appropriate input types so the device can offer a suitable keyboard. Keep labels visible, identify errors clearly, and preserve entered information when corrections are needed.\n\nCheck whether visitors can reach the submit button, understand required fields, and see the confirmation after submitting. The entire task needs to work comfortably with touch and the keyboard open.",
      },
      {
        title: "Floating Elements Can Compete for the Same Space",
        body: "Sticky headers, chat widgets, cookie notices, promotional banners, and bottom action bars may each seem reasonable in isolation.\n\nTogether, they can cover a substantial part of a small screen.\n\nReview them as a group. Decide which elements genuinely need to remain visible and when they should appear. Ensure notices can be handled appropriately and that floating controls do not block form fields, navigation, or important content.\n\nA mobile page needs usable space for the task itself.",
      },
      {
        title: "Images, Tables, and Interactive Features Need Adaptation",
        body: "A wide desktop image may lose its subject when cropped for mobile. Text embedded inside an image may become unreadable. A comparison table may extend far beyond the viewport.\n\nChoose image crops that preserve important information. Keep essential text as actual page content where possible. For tables, use a presentation that preserves the relationships between values and labels; controlled horizontal scrolling may be suitable when clearly communicated.\n\nInteractive features also need review. Sliders, galleries, and drag-based controls should have understandable controls and suitable alternatives where needed.\n\nThe right solution depends on the content, rather than a universal rule to shrink everything.",
      },
      {
        title: "Test the Spaces Between Standard Devices",
        body: "Real screens do not fit into only two categories.\n\nVisitors use small phones, large phones, tablets, compact laptops, portrait and landscape orientations, and different zoom settings. A layout may work at two familiar sizes while breaking between them.\n\nUse flexible components and introduce layout changes where the content needs them. Test long headings, longer button labels, expanded error messages, and realistic content—not only the shortest possible examples.\n\nThese checks expose weaknesses that polished mockups can hide.",
      },
      {
        title: "Complete the Journey on a Real Device",
        body: "Browser previews are useful during development, but real devices reveal touch behaviour, keyboard interactions, and browser-specific issues.\n\nFollow a complete customer journey:\n\nOpen the website, explore a service, view an example, navigate back, complete an enquiry, and read the confirmation.\n\nCheck that buttons respond correctly, information remains visible, and no part of the process depends on desktop-only behaviour.\n\nA website becomes meaningfully responsive when people can complete the same essential tasks across devices.",
      },
    ],
    closing: {
      title: "Design for the Screen Your Customer Is Holding",
      body: "Your visitors may discover your business wherever they happen to be. A thoughtful mobile experience helps them keep exploring, understand your offer, and contact you without unnecessary friction.",
      checklistTitle: "A Quick Mobile Experience Check",
      checklistIntro: "Open your website on your phone and ask:",
      checklist: [
        "Can I understand the service without zooming?",
        "Can I use the menu comfortably?",
        "Is important content visible without overlapping elements?",
        "Can I tap controls accurately?",
        "Can I complete and submit the form?",
        "Does the page still work when I enlarge the text?",
      ],
      ctaLabel: "Discuss Your Mobile Experience",
    },
  },
  {
    slug: "make-your-website-search-ready",
    category: "SEO",
    title: "A live website is only the beginning of being found.",
    summary:
      "Search-ready websites pair useful service content with crawlable structure, accessible pages, and accurate local details—without promising rankings.",
    visual: "search",
    image: "/beautiful.png",
    imageAlt: "Responsive business website designs displayed across desktop and mobile screens",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Make every service understandable",
        body: "Give important services a clear home with useful explanations, descriptive titles, and relevant internal links. Write for the questions your audience actually asks instead of repeating keywords across near-identical pages.",
      },
      {
        title: "Check discovery and access",
        body: "Review crawl access, canonical URLs, sitemap coverage, and accidental noindex settings. Search Console can help diagnose discovery and indexing issues. Submitting a page does not guarantee that it will be indexed or rank.",
      },
      {
        title: "Build relevant local context",
        body: "Where appropriate, keep your business profile, contact information, and service-area details accurate. Publish helpful local information when it reflects your real work. Search visibility takes ongoing work and cannot be promised by design alone.",
      },
    ],
  },
  {
    slug: "choose-a-website-platform",
    category: "DEVELOPMENT",
    title: "WordPress or a custom build? Start with your workflow.",
    summary:
      "Choose WordPress or a custom website by mapping your team's publishing workflow, integrations, ownership costs, and next stage of growth.",
    visual: "platform",
    image: "/insight-platform.webp",
    imageAlt: "Website design example showing a responsive business website layout",
    time: "3 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Map what your team needs to change",
        body: "A content-led business may value a familiar publishing workflow. A product with complex permissions or custom operations may need a more specialised application. List the tasks before comparing technology names.",
      },
      {
        title: "Consider the full ownership cost",
        body: "Include hosting, security updates, plugin licences, integrations, and maintenance. Either approach can become difficult when too many features are added without a clear owner or a realistic support plan.",
      },
      {
        title: "Choose for the next useful stage",
        body: "Ask how content will move, how accounts will be handed over, and how future changes will be delivered. The right platform supports your actual requirements and the people who will use it.",
      },
    ],
  },
  {
    slug: "benefits-of-a-business-website",
    category: "BUSINESS GROWTH",
    title: "A good business website keeps working after hours.",
    summary:
      "A business website can build trust, explain your offer around the clock, answer common questions, and give customers a way to contact you on their schedule.",
    visual: "strategy",
    image: "/insight-strategy.webp",
    imageAlt: "Business website layouts displayed on laptop and mobile screens",
    time: "4 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Give people a reliable first impression",
        body: "A clear, current website helps visitors understand what your business does, who it serves, and how to take the next step. Useful service details, genuine examples, and consistent contact information help people assess whether you are the right fit. A website supports trust, but it should make accurate claims and never imply guarantees you cannot stand behind.",
      },
      {
        title: "Make essential information available any time",
        body: "People often research outside business hours. Your website can keep your services, opening hours, service area, pricing guidance, and answers to common questions easy to find when your team is unavailable. A clear enquiry form or booking option lets visitors choose when to reach out, without suggesting that every visit will become a lead.",
      },
      {
        title: "Create a home base for every marketing channel",
        body: "Search listings, referrals, social posts, and ads can all point to a page you control. That gives interested people one dependable place to learn more, compare options, and contact you. Keep ownership of your domain and key accounts clear so the website remains an asset your business can manage.",
      },
      {
        title: "Learn what customers need and improve over time",
        body: "With privacy-conscious analytics and sensible measurement, you can see which pages people use and where they get stuck. Combine those signals with customer questions, then improve content, navigation, accessibility, and mobile usability. Review changes regularly; a useful website is maintained, not simply launched and forgotten.",
      },
    ],
  },
  {
    slug: "what-a-service-page-should-answer",
    category: "CONTENT STRATEGY",
    title: "What should a service page answer before someone gets in touch?",
    summary:
      "A useful service page explains who the service is for, what is included, how the work happens, and what a realistic next step looks like.",
    visual: "strategy",
    image: "/insight-strategy.webp",
    imageAlt: "A clear business website service page displayed across desktop and mobile screens",
    time: "5 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Start with the customer's situation",
        body: "A visitor arrives with a question, not a desire to read a list of company claims. Begin by describing the need or situation your service is designed to address. Use language customers recognise from real conversations, support requests, or sales calls.\n\nBe specific about who you serve and what kinds of projects are a good fit. If there are meaningful limits—such as a service area, minimum project size, or specialist requirement—explain them clearly. The goal is not to exclude people unnecessarily, but to help visitors quickly decide whether they are in the right place.",
      },
      {
        title: "Explain the deliverables, not just the label",
        body: "Terms such as “consulting,” “managed support,” or “website design” can mean very different things to different people. Describe the actual work someone can expect. A service might include an initial review, a planning session, implementation, and a handover. Say what is included and what would be scoped separately.\n\nConcrete detail makes your offer easier to compare and reduces avoidable misunderstandings. It also gives your team a consistent reference when answering enquiries. Avoid implying fixed outcomes or timelines unless you can substantiate them for the specific project.",
      },
      {
        title: "Make the process feel understandable",
        body: "People are more comfortable enquiring when they know what happens next. Outline the main stages from first conversation to delivery, using a short sequence rather than a dense block of internal terminology.\n\nMention what you need from a customer, how decisions are approved, and how progress is communicated. If every engagement is different, say that the process is tailored and explain which details affect the scope. Helpful expectations can build confidence without promising that every project follows an identical path.",
      },
      {
        title: "Use evidence with context",
        body: "A relevant example helps visitors understand how your service works in practice. Describe the original challenge, the work you completed, and the result you can accurately support. Explain your role and any factors that shaped the outcome.\n\nUse real testimonials or project examples only with the appropriate permission. If you show concept work or a demonstration, label it honestly. A small number of specific, well-explained examples is more useful than a gallery that leaves visitors guessing about the work behind each image.",
      },
      {
        title: "Give the visitor a clear next step",
        body: "Finish by offering an action that matches the level of commitment the visitor is ready to make. That might be a short discovery call, a project enquiry, a request for an estimate, or a link to a more detailed guide.\n\nExplain what information to include and when they can expect a response. Keep the contact form proportionate: ask for what your team needs to respond, and make optional details clearly optional. Then review the page using actual customer questions to identify gaps and improve it over time.",
      },
    ],
  },
  {
    slug: "website-enquiry-forms-that-work",
    category: "CONVERSION",
    title: "A better website enquiry form starts with better questions.",
    summary:
      "Design enquiry forms around the first useful conversation: ask only what your team needs, explain each field, and make the next step clear.",
    visual: "conversion",
    image: "/art3.png",
    imageAlt: "A simple online business enquiry form shown on a responsive website",
    time: "5 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Decide what your team needs to respond",
        body: "Before adding fields, identify the information that helps someone give a useful first reply. A project-based business may need a brief description of the work and a preferred contact method. A local service may need a postcode to confirm coverage. A support team may need an order reference.\n\nSeparate essential details from information that can wait until a conversation. Asking for a full budget, a long project specification, and multiple contact details can make a first enquiry feel like an application. Keep the initial request focused on what genuinely affects the response.",
      },
      {
        title: "Use clear labels and helpful examples",
        body: "Every field should say what it is for. Labels such as “Your message” are understandable, but a short prompt can make the answer more useful: “What would you like help with?” If a format matters, provide an example and make the expected format clear.\n\nDo not rely on placeholder text as the only label; it disappears when people start typing and may be difficult to read. Mark required fields visibly, identify optional fields, and explain why sensitive information is needed before requesting it.",
      },
      {
        title: "Make the form work for different people",
        body: "A form should be usable with a keyboard, screen reader, touch screen, and browser zoom. Associate each label with its input, provide clear focus indicators, and connect validation messages to the relevant field. Do not communicate errors through colour alone.\n\nUse appropriate input types for email addresses, phone numbers, and dates so mobile devices can offer useful keyboards. Preserve entered information when validation fails, and place an error summary or concise message where it can be found. Test the complete journey with keyboard navigation rather than checking only how the form looks.",
      },
      {
        title: "Set expectations around privacy and response",
        body: "Tell people how their information will be used and link to a relevant privacy notice. Collect only the personal data needed for the stated purpose, and avoid adding marketing consent by default. If separate permission is appropriate, present it as a distinct, optional choice.\n\nAfter submission, confirm that the form was received and explain what happens next. Give a realistic response window only if your team can maintain it. A clear confirmation prevents duplicate submissions and helps people understand whether they should expect an email, a phone call, or another step.",
      },
      {
        title: "Measure whether the journey is actually useful",
        body: "Track successful submissions and, where appropriate, the points where people leave the form. Use privacy-conscious analytics and make sure measurement respects your consent and data policies. A high submission count alone does not show whether the form is bringing in suitable enquiries.\n\nReview the quality of incoming requests with the people who respond to them. If important details are consistently missing, add one well-explained question. If visitors abandon the form, check the effort required, the mobile experience, loading performance, and whether the page explains what happens after submission.",
      },
    ],
  },
  {
    slug: "website-content-maintenance-checklist",
    category: "WEBSITE MANAGEMENT",
    title: "A practical routine for keeping website content current.",
    summary:
      "A lightweight content review helps teams catch outdated details, broken journeys, and accessibility issues before they confuse website visitors.",
    visual: "platform",
    image: "/insight-mobile-design.webp",
    imageAlt: "A business website being reviewed on a mobile phone for clear current content",
    time: "6 min read",
    datePublished: "2026-10-18",
    author: "Quorisx Editorial Team",
    sections: [
      {
        title: "Choose an owner and a review schedule",
        body: "Content maintenance is easier when someone is responsible for noticing and coordinating updates. That person does not need to write every page, but should know who can confirm service details, pricing guidance, opening hours, and policy changes.\n\nSet a review schedule that reflects how quickly information changes. Contact details and opening hours may need frequent checks, while a stable company background page may need less attention. Add important dates to a shared calendar so reviews do not depend on someone remembering them during a busy week.",
      },
      {
        title: "Check the details visitors rely on",
        body: "Start with facts that can directly affect a customer's decision: services offered, locations served, eligibility, fees or pricing guidance, availability, and ways to get in touch. Check that the same information appears consistently across the website and relevant business profiles.\n\nConfirm that staff names, testimonials, project examples, and partner references are still accurate and approved for use. Remove temporary notices and expired announcements. When information is uncertain, verify it with the accountable person rather than leaving an outdated claim in place.",
      },
      {
        title: "Walk through important journeys",
        body: "Review the site as a visitor trying to complete a real task. Follow a service page to its enquiry form, try the phone link on a mobile device, open key downloads, and check the confirmation shown after a submission.\n\nTest important routes after significant content or design changes. Check internal links, navigation labels, page titles, and redirects. A page can look polished while a call-to-action points to the wrong destination, so test the interaction rather than relying on a visual scan.",
      },
      {
        title: "Include accessibility and mobile checks",
        body: "Use a keyboard to move through navigation, forms, and interactive content. Confirm that focus remains visible and follows a sensible order. Inspect headings for a meaningful hierarchy, images for useful alternative text, and forms for labels and understandable error messages.\n\nAt a narrow viewport and with browser zoom, check for clipped text, overlapping controls, tiny tap targets, and horizontal scrolling. These straightforward checks do not replace a full accessibility evaluation, but they can surface common barriers before a release and help teams build accessibility into ordinary maintenance.",
      },
      {
        title: "Record what changed and what comes next",
        body: "Keep a concise change log with the page, update, date, and owner. Note broken links or technical issues that need a developer, and assign a follow-up rather than leaving observations in an informal message thread.\n\nUse analytics, customer questions, and search queries as prompts for review—not as automatic instructions to rewrite a page. Look for repeated confusion and check whether the content answers the underlying question. Small, evidence-informed updates are easier to evaluate and maintain than an unplanned redesign of every page.",
      },
    ],
  },
];

export function getWebsiteArticle(slug: string) {
  return websiteArticles.find((article) => article.slug === slug);
}
