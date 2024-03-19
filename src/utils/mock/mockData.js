import { centralImages } from "../images/centralImages";
import {
    AIGeneratorSVG,
    AdvanceDashboardSVG,
    ArticleSVG,
    BlogConclusionSVG,
    CustomTemplateSVG,
    MultiLingualSVG,
    PaymentGatewaySVG,
    ProductDescSVG,
    SupportPlatformSVG,
    TestimonialSVG,
    YoutubeSVG,
    InstagramSVG,
    TwitterSVG,
    BookmarkSVG,
    FacebookSVG,
    GoogleAdsSVG,
    ParagraphSVG,
    ProsConsSVG,
    MetaDescSVG,
    FAQSVG,
    EmailSVG,
    SendSVG,
    GrammarSVG,
    SummarizeSVG,
    ImgSVG,
    SpeechSVG,
    CodeSVG,
    ArticleWizardSVG,
    AIVisionSVG,
    RSSSVG
} from "../svg/SVG"

const NavItem = [
    { id: 1, itemName: 'Home', link: '/' },
    { id: 2, itemName: 'About', link: '/about' },
    { id: 3, itemName: 'Features', link: '/features' },
    { id: 4, itemName: 'How It Works', link: '/how-works' },
    { id: 5, itemName: 'Pricing', link: '/pricing' },
    { id: 6, itemName: 'FAQ', link: '/faq' }
]
const FutureOfAIData = [
    {
        id: 1,
        svgIcon: AIGeneratorSVG,
        title: 'AI Generator',
        description: 'Generate <strong>text, image, code, chat</strong> and even more with'
    },
    {
        id: 2,
        svgIcon: AdvanceDashboardSVG,
        title: 'Advanced Dashboard',
        description: 'Access to valuable user insight, analytics and activity.'
    },
    {
        id: 3,
        svgIcon: PaymentGatewaySVG,
        title: 'Payment Gateways',
        description: 'Securely process credit card, debit card, or other methods.'
    },
    {
        id: 4,
        svgIcon: MultiLingualSVG,
        title: 'Multi-Lingual',
        description: 'Ability to understand and generate content in different languages'
    },
    {
        id: 5,
        svgIcon: CustomTemplateSVG,
        title: 'Custom Templates',
        description: 'Add unlimited number of custom prompts for your customers.'
    },
    {
        id: 6,
        svgIcon: SupportPlatformSVG,
        title: 'Support Platform',
        description: 'Access and manage your support tickets from your dashboard.'
    }
]
const careerData = [
    {
        id: 1,
        title: 'Digital Agencies',
        color: '#CBA153',
        shadow: '#cba15326',
        className: { text: 'text-[#CBA153]', bg: 'bg-[#CBA153]', shadow: 'hover:shadow-S[#cba15326]' },
    },
    {
        id: 2,
        title: 'Product Designers',
        className: { text: 'text-[#AB7FE6]', bg: 'bg-[#AB7FE6]', shadow: 'hover:shadow-[#ab7fe621]' }
    },
    {
        id: 3,
        title: 'Enterpreneurs',
        className: { text: 'text-[#57CBC6]', bg: 'bg-[#57CBC6]', shadow: 'hover:shadow-[#57cbc624]' }
    },
    {
        id: 4,
        title: 'Copywriters',
        className: { text: 'text-[#7F8FE6]', bg: 'bg-[#7F8FE6]', shadow: 'hover:shadow-[#7f8fe624]' }
    },
    {
        id: 5,
        title: 'Digital Marketers',
        className: { text: 'text-[#6BAC65]', bg: 'bg-[#6BAC65]', shadow: 'hover:shadow-[#6bac6524]' }
    },
    {
        id: 6,
        title: 'Developers',
        className: { text: 'text-[#EF793A]', bg: 'bg-[#EF793A]', shadow: 'hover:shadow-[#ef793a1f]' }
    }

]
const toolsCardData = [
    {
        id: 1,
        title: 'Advanced Dashboard',
        description: 'Track a wide range of data points, including user traffic and sales.',
        img: centralImages.tools_1
    },
    {
        id: 2,
        title: 'Payment Gateways',
        description: 'Securely process credit card or other electronic payment methods.',
        img: centralImages.tools_2
    },
    {
        id: 3,
        title: 'Multilingual',
        description: 'Ability to understand and generate content in different languages.',
        img: centralImages.tools_3
    },
    {
        id: 4,
        title: 'Affiliate System',
        description: 'Ability to invite friends, and earn commission from their first purchase.',
        img: centralImages.tools_4
    },
    {
        id: 5,
        title: 'Easy Export',
        description: 'Export generated content as plain text, PDF, Word or HTML easily.',
        img: centralImages.tools_5
    },
    {
        id: 6,
        title: 'Support Platform',
        description: 'Access and mage support tickets from your dashboard.',
        img: centralImages.tools_6
    }
]
const futureAITabContentData = [
    {
        id: "ai-text-generator",
        buttonTxt: "AI Text Generator",
        smTitle: "Say goodbye to writer’s block",
        title: "Intelligent Writing Assistant",
        description: "Writer is designed to help you <strong>generate high-quality texts instantly</strong>, without breaking a sweat. With our intuitive interface and powerful features, you can easily edit, export or publish your AI-generated result.",
        imageSrc: centralImages?.textGeneratorImg,
        alt: "Text Generator",
        imageDesc: "Generate, edit, export.",
        backgroundColor: "#F3E5F5",
        poweredBy: "Powered by OpenAI"
    },
    {
        id: "ai-image-generator",
        buttonTxt: "AI Image Generator",
        smTitle: "Unleash your creativity",
        title: "Create eye-catching images and graphics.",
        description: "Generate high quality images for a wide range of applications",
        imageSrc: centralImages?.imgGeneratorImg,
        alt: "Image Generator",
        imageDesc: "Imagine, Generate, Publish.",
        backgroundColor: "#DFE5EB",
        poweredBy: "Powered by Dall-E"
    },
    {
        id: "ai-code-generator",
        buttonTxt: "AI Code Generator",
        smTitle: "The future of development'",
        title: "Generate high quality code in no time.",
        description: "MagicAI is designed to make coding faster, easier, and more efficient than ever before. Whether you’re a seasoned developer or a coding newbie, our tool will help you streamline your coding process and get your projects up and running in no time.",
        imageSrc: centralImages?.codeGeneratorImg,
        alt: "Code Generator",
        imageDesc: "and more efficient than ever before. Whether you’re a seasoned developer or a coding newbie",
        backgroundColor: "#DDE6FF",
        poweredBy: "Fix. Improve. Generate."
    },
    {
        id: "ai-chat-bot",
        buttonTxt: "AI Chat Bot",
        smTitle: "Intuitive / Human like Chatbot ",
        title: "Meet your next virtual assistant.",
        description: "Get instant answers to your questions, no matter the topic. Whether you’re looking to book a reservation, get product recommendations, or just chat about the weather, MagicAI is always ready and willing to help.",
        imageSrc: centralImages?.aiGeneratorImg,
        alt: "AI Chat Generator",
        imageDesc: "Chat, Solve, Repeat.",
        backgroundColor: "#F9DDDF",
        poweredBy: "Powered by OpenAI"
    },
    {
        id: "ai-speech-to-text",
        buttonTxt: "AI Speech To Text",
        smTitle: "Say goodbye to writer’s block",
        title: "Transcribe your speech into text.",
        description: "Accurately transcribe your recordings in just minutes. With our user-friendly interface, you can upload your files and have them transcribed in a matter of clicks.",
        imageSrc: centralImages?.aiSpeechImg,
        alt: "AI Speech Generator",
        imageDesc: "Upload, Analyze, Generate.",
        backgroundColor: "#FFF8EB",
        poweredBy: "Powered by OpenAI"
    }
];
const customTemplateItemListData = [
    {
        id: 'templates-all',
        title: 'All',
    },
    {
        id: 'templates-blog',
        title: 'Blog',
    },
    {
        id: 'templates-ecommerce',
        title: '🎯 Ecommerce',
    },
    {
        id: 'templates-development',
        title: 'Development',
    },
    {
        id: 'templates-advertisement',
        title: 'Advertisement',
    },
    {
        id: 'templates-social-media',
        title: 'Social Media',
    },
    {
        id: 'templates-email',
        title: 'Email',
    },
    {
        id: 'templates-marketing',
        title: '🔥 Marketing',
    },
    {
        id: 'templates-voiceover',
        title: 'Voiceover',
    },
    {
        id: 'templates-youtube',
        title: 'Youtube',
    },
    {
        id: 'templates-rss',
        title: 'RSS',
    }
];
const customTemplateCardData = [
    {
        id: "templates-ecommerce",
        svgIcon: ProductDescSVG,
        title: "Product Description",
        description: "Easily create compelling product descriptions that sell. Increase conversions and boost sales.",
    },
    {
        id: "templates-blog",
        svgIcon: ArticleSVG,
        title: "Article Generator",
        description: "Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.",
    },
    {
        id: "templates-ecommerce",
        svgIcon: TestimonialSVG,
        title: "Testimonial Review",
        description: "Instantly generate authentic testimonials. Build trust and credibility with genuine reviews."
    },
    {
        id: "templates-blog",
        svgIcon: BlogConclusionSVG,
        title: "Blog Conclusion",
        description: "End your blog posts on a high note. Craft memorable conclusions that leave a lasting impact."
    },
    {
        id: "templates-social-media",
        svgIcon: YoutubeSVG,
        title: "Youtube Video Description",
        description: "Elevate your YouTube content with compelling video descriptions. Generate engaging descriptions effortlessly and increase views."
    },
    {
        id: "templates-social-media",
        svgIcon: InstagramSVG,
        title: "Instagram Captions",
        description: "Elevate your Instagram game with captivating captions. Generate unique captions that engage followers and increase your reach."
    },
    {
        id: "templates-social-media",
        svgIcon: InstagramSVG,
        title: "Instagram Hashtags",
        description: "Boost your Instagram reach with relevant hashtags. Generate optimal, trending hashtags and increase your visibility."
    },
    {
        id: "templates-social-media",
        svgIcon: TwitterSVG,
        title: "Social Media Post Tweet",
        description: "Make an impact with every tweet. Generate attention-grabbing social media posts and increase engagement."
    },
    {
        id: "templates-social-media",
        svgIcon: BookmarkSVG,
        title: "Social Media Post Business",
        description: "Generate a text for your business social media networks. Maximize your social media presence with impactful business posts."
    },
    {
        id: "templates-social-media",
        svgIcon: FacebookSVG,
        title: "Facebook Headlines",
        description: "Get noticed with attention-grabbing Facebook headlines. Generate unique, clickable headlines that increase engagement and drive traffic."
    },
    {
        id: "templates-advertisement",
        svgIcon: GoogleAdsSVG,
        title: "Google Ads Headlines",
        description: "Create high-converting Google ads with captivating headlines. Generate unique, clickable ads that drive traffic and boost sales."
    },
    {
        id: "templates-advertisement",
        svgIcon: GoogleAdsSVG,
        title: "Google Ads Description",
        description: "Step up your Google ad game, Craft high-converting ad copy that grabs attention and drives sales."
    },
    {
        id: "templates-blog",
        svgIcon: ParagraphSVG,
        title: "Paragraph Generator",
        description: "Generate a paragraph with keywords and description. Never struggle with writer's block again. Generate flawless paragraphs that captivate readers."
    },
    {
        id: "templates-development",
        svgIcon: ProsConsSVG,
        title: "Pros & Cons",
        description: "Make informed decisions with ease. Generate unbiased pros and cons lists that help you weigh options and make better choices."
    },
    {
        id: "templates-development",
        svgIcon: MetaDescSVG,
        title: "Meta Description",
        description: "Get more clicks with compelling meta descriptions. Generate unique, SEO-friendly meta descriptions that attract customers and boost traffic."
    },
    {
        id: "templates-development",
        svgIcon: FAQSVG,
        title: "FAQ Generator (All Datas)",
        description: "Quickly create helpful FAQs. Our AI-powered generator provides custom responses to common questions in seconds."
    },
    {
        id: "templates-email",
        svgIcon: EmailSVG,
        title: "Email Generator",
        description: "Generate an email with your subject and description. Streamline your inbox and save time."
    },
    {
        id: "templates-email",
        svgIcon: EmailSVG,
        title: "Email Answer Generator",
        description: "Effortlessly tackle your overflowing inbox with custom, accurate responses to common queries, freeing you up to focus on what matters most."
    },
    {
        id: "templates-email",
        svgIcon: SendSVG,
        title: "Newsletter Generator",
        description: "Generate engaging newsletters easily with personalized content that resonates with your audience, driving growth and engagement."
    },
    {
        id: "templates-blog",
        svgIcon: GrammarSVG,
        title: "Grammar Correction",
        description: "Eliminate grammar errors and enhance your writing with ease. Our tool offers seamless grammar correction for flawless content."
    },
    {
        id: "templates-blog",
        svgIcon: SummarizeSVG,
        title: "TL;DR Summarization",
        description: "Automatically summarize long texts into bite-sized summaries with this TL;DR generator."
    },
    {
        id: "templates-development",
        svgIcon: ImgSVG,
        title: "AI Image Generator",
        description: "Unleash your creativity with our AI image generator that produces stunning visuals in seconds."
    },
    {
        id: "templates-blog",
        svgIcon: SpeechSVG,
        title: "AI Speech to Text",
        description: "The AI app that turns audio speech into text with ease. Get ready to generate custom texts from audio files quickly and accurately."
    },
    {
        id: "templates-development",
        svgIcon: CodeSVG,
        title: "AI Code Generator",
        description: "Create custom code in seconds! Leverage our state-of-the-art AI technology to quickly and easily generate code in any language."
    },
    {
        id: "templates-voiceover",
        svgIcon: SpeechSVG,
        title: "AI Voiceover",
        description: "The AI app that turns audio speech into text with ease. Get ready to generate custom texts from audio files quickly and accurately."
    },
    {
        id: "templates-blog",
        svgIcon: ArticleWizardSVG,
        title: "AI Article Wizard Generator",
        description: "Create custom article instantly with our article wizard generator. Boost engagement and save time."
    },
    {
        id: "templates-blog",
        svgIcon: AIVisionSVG,
        title: "AI Vision",
        description: "Elevate your visual analytics with our AI Vision platform. Harness the power of machine learning for real-time image recognition and data insights. Enhance efficiency and decision-making."
    },
    {
        id: "templates-blog",
        svgIcon: AIVisionSVG,
        title: "File Analyzer",
        description: "Simply upload a file (PDF, CSV, .doc or .docx) and extract key insights or summarize the entire document."
    },
    {
        id: "templates-blog",
        svgIcon: AIVisionSVG,
        title: "Chat Image",
        description: "Generate Image by user input"
    },
    {
        id: "templates-youtube",
        svgIcon: YoutubeSVG,
        title: "AI YouTube",
        description: "Simply turn your Youtube videos into Blog post."
    },
    {
        id: "templates-blog",
        svgIcon: ArticleWizardSVG,
        title: "AI ReWriter",
        description: "Rewrite more professional and detailed content instantly with our ai rewriter. Boost engagement and save time."
    },
    {
        id: "templates-rss",
        svgIcon: RSSSVG,
        title: "AI RSS",
        description: "Generate unique content with RSS Feed."
    },
    {
        id: "templates-blog",
        svgIcon: ArticleWizardSVG,
        title: "AI Plagiarism Checker",
        description: "Analyze text, comparing it against a vast database online content to identify potential plagiarism."
    },
    {
        id: "templates-blog",
        svgIcon: ArticleWizardSVG,
        title: "AI Content Detector",
        description: "Analyze text, comparing it against a vast database online content to AI writing content."
    },
    {
        id: "templates-video",
        svgIcon: AIVisionSVG,
        title: "AI Video",
        description: "Bring your static images to life and create visually compelling videos effortlessly."
    },
    {
        id: "templates-blog",
        svgIcon: AIVisionSVG,
        title: "AI Web Chat",
        description: "Analyze web page content with url"
    },
]
const faqData = [
    {
        question: "How does it generate responses?",
        answer: "MagicAI uses the most popular AI models such as GPT, Dall-E, Ada to create text, image, code and more within seconds. The process is simple. All you have to do is provide a topic or idea, and our AI-based generator will take care of the rest."
    },
    {
        question: "Can I create templates or chat bots?",
        answer: "You can use pre-made templates and examples for various content types and industries to help you get started quickly. You can even create your own chatbot or custom prompt template for further customization."
    },
    {
        question: "Should I buy regular or extended license?",
        answer: "If you plan to charge end users for the final product or service. You should buy the extended license in compliance with Envato’s terms of service same as other projects https://codecanyon.net/licenses/standard"
    },
    {
        question: "Can I translate the script into another language?",
        answer: "Yes! MagicAI's multilingual capabilities apply to both content generation and dashboard language. You can easily translate it into other languages. A built-in translation tool is coming soon!"
    },
    {
        question: "Is there a mobile app for MagicAI?",
        answer: "MagicAI provides an almost native-app experience thanks to its mobile-first approach. The entire layout is responsive and works great on any device regardless of the size."
    }
];
const latestNewsData = [
    {
        id: 1,
        imageUrl: centralImages?.newsOne,
        title: "The Benefits of ChatGPT",
        date: "17 Jul",
        author: "Admin",
        link: "/"
    },
    {
        id: 2,
        imageUrl: centralImages?.newsTwo,
        title: "Creating Articles with ChatGPT",
        date: "09 Dec",
        author: "Admin",
        link: "/"
    },
    {
        id: 3,
        imageUrl: centralImages?.newsThree,
        title: "ChatGPT: Revolutionizing Conversational AI",
        date: "17 Jul",
        author: "Admin",
        link: "/"
    }
];
const pricingTabData = [
    { id: "pricing-monthly", label: "Monthly" },
    { id: "pricing-annual", label: "Annual", save: "Save 30%" },
    { id: "pricing-lifetime", label: "Lifetime" },
    { id: "pricing-prepaid", label: "Pre-Paid" }
];
const pricingCardData = [
    {
        id: "pricing-monthly",
        data: [
            {
                id: 1,
                title: "Free",
                price: "0",
                features: [
                    "ChatGPT 3.5",
                    "Basic Support",
                    "<strong>10,000</strong> Word Tokens",
                    "<strong>5,000</strong> Image Tokens"
                ],
                border: false,
                link: "/"
            },
            {
                id: 2,
                title: "Teams",
                price: "19",
                features: [
                    "ChatGPT 4",
                    "5 Seats Available",
                    "VIP Support",
                    "Access to premium templates",
                    "<strong>30,000</strong> Word Tokens",
                    "<strong>10,000</strong> Image Tokens"
                ],
                border: false,
                link: "/"
            },
            {
                id: 3,
                title: "Premium",
                price: "29",
                features: [
                    "2 Days of free trial.",
                    "All features in previous plans",
                    "VIP Support",
                    "<strong>Unlimited</strong> Word Tokens",
                    "<strong>Unlimited</strong> Image Tokens"
                ],
                border: true,
                link: "/"
            }
        ]
    },
    {
        id: "pricing-annual",
        data: [
            {
                id: 4,
                title: "Basic",
                price: "399",
                features: [
                    "ChatGPT 3.5",
                    "Basic Support",
                    "<strong>100,000</strong> Word Tokens",
                    "<strong>50,000</strong> Image Tokens"
                ],
                border: true,
                link: "/"
            }
        ]
    },
    {
        id: "pricing-prepaid",
        data: [
            {
                id: 7,
                title: "Standard",
                price: "199",
                features: [
                    "ChatGPT 4",
                    "VIP Support",
                    "Access to premium templates",
                    "<strong>300,000</strong> Word Tokens",
                    "<strong>100,000</strong> Image Tokens"
                ],
                border: true,
                link: "/"
            },
            {
                id: 8,
                title: "Premium",
                price: "299",
                features: [
                    "All features in previous plans",
                    "VIP Support",
                    "<strong>Unlimited</strong> Word Tokens",
                    "<strong>200</strong> Image Tokens"
                ],
                border: false,
                link: "/"
            }
        ]
    },
    {
        id: "pricing-lifetime",
        data: [
            {
                id: 9,
                title: "Lifetime Premium",
                price: "960",
                features: [
                    "Access All Templates",
                    "Generate Images",
                    "Generate Text",
                    "AI Chat",
                    "Access AI Chat Templates",
                    "VIP Support",
                    "<strong>Unlimited</strong> Word Tokens",
                    "<strong>Unlimited</strong> Image Tokens"
                ],
                border: true,
                link: "/"
            }
        ]
    }
];
const testimonialData = [
    {
        id: 1,
        avatar: centralImages?.testimonial_client_1,
        client: "Peline Jan",
        position: "Entrepreneur",
        quote: "“Not only did it save me time, but it also helped me produce content that was more engaging and effective than what I had been creating on my own.”"
    },
    {
        id: 2,
        avatar: centralImages?.testimonial_client_2,
        client: "Tom Danial",
        position: "Writer",
        quote: "“As a freelance writer, I was looking for a tool that could help me generate ideas and write faster. This AI Text website has done that and more.”"
    },
    {
        id: 3,
        avatar: centralImages?.testimonial_client_3,
        client: "Eric Sanchez",
        position: "UX Designer",
        quote: "“The customer support team has been incredibly helpful whenever I’ve had any questions. I can’t imagine going back to my old content-creation methods!”"
    }
]

export {
    NavItem,
    FutureOfAIData,
    careerData,
    toolsCardData,
    futureAITabContentData,
    customTemplateItemListData,
    customTemplateCardData,
    faqData,
    latestNewsData,
    pricingTabData,
    pricingCardData,
    testimonialData
}
