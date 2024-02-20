const promptsArray = [
  {
    category: "Social Media",
    prompts: [
      "Craft a caption for an Instagram post showcasing your team's creativity. Share a project or initiative that highlights your company's innovative spirit.",
      "Write a tweet announcing a giveaway or contest on Twitter. Encourage followers to participate, share the tweet, and use a specific hashtag to enter.",
      "Write a Facebook post introducing a special offer to your audience. Create a sense of urgency and provide clear instructions on how to redeem the offer.",
      "Create a Snapchat story promoting a limited-time offer. Use engaging visuals and a countdown to create a sense of urgency among your audience.",
      "Generate a Pinterest description for a recipe post. Include ingredients, cooking steps, and add a personal touch to make it more relatable.",
      "Craft a TikTok video description for a fun challenge related to your brand. Encourage users to participate and share their own videos using a dedicated hashtag.",
      "Write an Instagram Story showcasing a day in the life of your team. Give followers a glimpse behind the scenes and share moments from various departments.",
      "Compose a Facebook post inviting followers to a virtual event or webinar. Highlight key topics, guest speakers, and provide registration details.",
      "Create a YouTube video title and description for a tutorial on using your product. Clearly outline the steps, benefits, and address common user questions.",
      "Write a social media post celebrating a company milestone. Express gratitude to customers, employees, and partners who contributed to your success.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Support",
    prompts: [
      "Compose a customer support email addressing a common inquiry or concern. Provide detailed information and offer solutions to ensure customer satisfaction.",
      "Craft a live chat response to assist a customer with a technical issue. Ask clarifying questions and guide them through troubleshooting steps.",
      "Write a support ticket response for a billing-related question. Clearly explain charges, refund policies, and offer assistance in resolving any discrepancies.",
      "Create an automated response for a frequently asked support question on your website. Include helpful links and resources to guide users to a resolution.",
      "Craft a response to a customer inquiry on social media. Acknowledge their concern, provide a solution, and invite them to contact support for further assistance.",
      "Write a knowledge base article explaining how to use a specific feature of your product. Include step-by-step instructions, screenshots, and troubleshooting tips.",
      "Compose a follow-up email to gather feedback from a customer who recently received support. Thank them for their input and encourage them to share their experience.",
      "Create an on-hold script for your support hotline. Include information about expected wait times, alternative support channels, and helpful tips while waiting.",
      "Craft an apology email for any inconvenience caused by a service outage. Explain the issue, outline the steps taken to resolve it, and offer compensation if applicable.",
      "Write a support response for a customer expressing frustration. Empathize with their experience, apologize, and outline the steps being taken to address their concerns.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Sales",
    prompts: [
      "Compose a persuasive email to a potential client introducing your product or service. Highlight key features, benefits, and include a compelling call-to-action.",
      "Craft a script for a sales call to discuss a new product offering. Focus on understanding the client's needs, addressing objections, and closing the sale.",
      "Write a follow-up email to a lead who showed interest in your product but hasn't made a purchase. Remind them of the value proposition and offer additional incentives.",
      "Create a sales pitch for a presentation to a group of potential investors. Clearly articulate the unique selling points and the market opportunity for your product.",
      "Craft a social media post announcing a limited-time promotion or discount. Create a sense of urgency and encourage followers to take advantage of the special offer.",
      "Write a response to a customer inquiry seeking clarification on pricing options. Provide transparent information and guide them towards the most suitable package.",
      "Compose a proposal for a corporate partnership. Outline the benefits of collaboration, potential outcomes, and how it aligns with both parties' goals.",
      "Craft a persuasive product description for an e-commerce website. Use persuasive language, highlight key features, and address potential customer concerns.",
      "Write a sales script for a webinar presentation. Structure the presentation to capture the audience's attention, provide value, and drive them towards a purchase.",
      "Create an email sequence for nurturing leads. Develop a series of emails that gradually introduce your product, address common pain points, and lead to a sales pitch.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Writing Assistance",
    prompts: [
      "Generate creative and compelling opening lines for a blog post about the benefits of mindfulness and meditation. Capture the reader's attention from the start.",
      "Compose a short story with a surprising twist ending. Use vivid descriptions and character development to engage the reader throughout the narrative.",
      "Craft a persuasive essay arguing the importance of renewable energy sources. Present well-researched facts and compelling reasoning to support your stance.",
      "Write a poem inspired by the theme of resilience and overcoming challenges. Explore metaphors and vivid imagery to convey a sense of strength and perseverance.",
      "Develop an engaging introduction for an informative article about the impact of technology on modern society. Clearly outline the main points to be discussed.",
      "Create a dialogue between two characters discussing the pros and cons of artificial intelligence. Explore ethical considerations and potential societal impacts.",
      "Compose a product review for a popular novel, highlighting its strengths and potential audience appeal. Provide constructive feedback for potential readers.",
      "Write a set of humorous one-liners suitable for a stand-up comedy routine. Explore everyday situations and clever observations to entertain the audience.",
      "Craft a motivational speech aimed at inspiring individuals to pursue their passions and overcome obstacles. Use powerful language and personal anecdotes.",
      "Generate ideas and an outline for a short e-book on effective time management strategies for busy professionals. Clearly define chapters and key takeaways.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Marketing",
    prompts: [
      "Create a catchy tagline for a new fitness app that emphasizes convenience and personalized workout plans. Encourage users to achieve their fitness goals.",
      "Craft an attention-grabbing headline for an online advertisement promoting a limited-time discount on premium beauty products. Highlight key benefits.",
      "Write a persuasive script for a 30-second video ad promoting a sustainable fashion brand. Showcase eco-friendly practices and stylish clothing options.",
      "Develop a social media post for an upcoming product launch in the tech industry. Tease innovative features and build excitement among your audience.",
      "Compose an email campaign announcing a loyalty program for a coffee shop. Emphasize exclusive perks and rewards to encourage customer engagement.",
      "Design a promotional infographic for a travel agency showcasing the top destinations for the upcoming holiday season. Include enticing visuals and travel tips.",
      "Write a press release introducing a new collaboration between two well-known brands. Highlight the unique aspects of the partnership and its benefits.",
      "Craft engaging content for a webinar on digital marketing trends. Provide valuable insights and actionable strategies for businesses to stay competitive.",
      "Create a blog post discussing the impact of influencer marketing on consumer behavior. Analyze successful campaigns and offer tips for brands seeking influencers.",
      "Generate social media content to promote a live online event, such as a webinar or virtual conference. Encourage participation and share key event details.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Product Management",
    prompts: [
      "Draft a product roadmap outlining the key milestones for the next quarter. Include feature releases, enhancements, and improvements to user experience.",
      "Create user stories for a new feature in a project management software. Define the user's perspective, goals, and expected outcomes.",
      // ... (more prompts)
    ],
  },
  {
    category: "Product Management",
    prompts: [
      "Draft a product roadmap outlining the key milestones for the next quarter. Include feature releases, enhancements, and improvements to user experience.",
      "Create user stories for a new feature in a project management software. Define the user's perspective, goals, and expected outcomes.",
      "Write a product requirements document (PRD) for a mobile app that helps users manage their daily tasks and set reminders. Specify features, functionalities, and design.",
      "Develop a survey to gather customer feedback on an existing product. Include questions about usability, satisfaction, and potential areas for improvement.",
      "Compose release notes for a software update, detailing the latest features, bug fixes, and improvements. Communicate the value of the update to users.",
      "Craft a customer onboarding email series for a SaaS product. Guide new users through setting up their accounts and using essential features.",
      "Write a script for a product demo video showcasing the functionalities of a new e-commerce platform. Focus on user-friendly navigation and seamless transactions.",
      "Create a landing page copy for a pre-launch campaign of a smart home device. Highlight its innovative features and how it simplifies daily routines.",
      "Draft a competitive analysis report comparing your product to key competitors. Evaluate strengths, weaknesses, opportunities, and potential threats.",
      "Write a blog post discussing the importance of user feedback in the iterative development process. Share success stories and tips for effective feedback collection.",
      // ... (1 more prompt)
    ],
  },
  {
    category: "HR Management",
    prompts: [
      "Compose an internal memo announcing a new employee wellness program. Outline the program's benefits and how employees can participate.",
      "Write a job description for a senior-level position in your organization. Clearly define the qualifications, responsibilities, and key skills required.",
      "Draft an email communication to employees about changes to company policies. Clearly explain the updates and provide resources for further clarification.",
      "Create an engaging post for an internal company blog celebrating employee achievements. Highlight individual accomplishments and contributions.",
      "Craft a script for an orientation video for new hires. Include information about company culture, policies, and an introduction to key team members.",
      "Write a letter of recognition to acknowledge an employee's outstanding performance. Highlight specific contributions and express gratitude.",
      "Develop a set of interview questions for hiring candidates for a customer service role. Ensure questions assess both skills and cultural fit.",
      "Compose an announcement for an upcoming team-building event. Include details about the activities planned and emphasize the importance of participation.",
      "Draft a communication plan for rolling out a new performance review process. Explain the changes, address concerns, and provide support resources.",
      "Create a set of guidelines for employees on remote work policies. Cover topics like work hours, communication expectations, and collaboration tools.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Legal",
    prompts: [
      "Write a legal memorandum summarizing recent changes in employment law affecting your organization. Provide recommendations for compliance.",
      "Craft a cease-and-desist letter to address potential trademark infringement. Clearly state the issue, demand corrective action, and set a deadline.",
      "Develop terms and conditions for an e-commerce website. Cover aspects such as payment, shipping, returns, and dispute resolution.",
      "Draft a non-disclosure agreement (NDA) for a business partnership. Clearly outline the terms to protect sensitive information shared between parties.",
      "Compose an email to clients informing them of changes to privacy policies in compliance with new data protection regulations.",
      "Create a legal opinion letter outlining the potential legal risks and benefits of a proposed business expansion strategy. Provide actionable recommendations.",
      "Write a contract for a freelance service engagement. Clearly define deliverables, payment terms, and deadlines.",
      "Craft an employee handbook section addressing workplace harassment policies. Clearly communicate expectations and procedures for reporting incidents.",
      "Develop a response to a customer complaint about a product. Outline the steps the company will take to investigate and resolve the issue.",
      "Compose a letter to creditors proposing a debt settlement plan for a client. Clearly outline the terms and conditions of the proposed arrangement.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Education",
    prompts: [
      "Write a lesson plan for teaching a high school biology class about cellular respiration. Include learning objectives, activities, and assessments.",
      "Develop a syllabus for an online course on digital marketing fundamentals. Outline topics, readings, assignments, and assessment criteria.",
      "Compose a letter to parents explaining changes in the school's grading system. Provide clarity on the new approach and address potential concerns.",
      "Craft an announcement for a school event celebrating cultural diversity. Include details about activities, performances, and the importance of participation.",
      "Create a set of questions for a quiz on historical events. Ensure a variety of question types to assess students' understanding of the material.",
      "Write a newsletter article highlighting student achievements and extracurricular activities. Include quotes from students and showcase diverse accomplishments.",
      "Develop a script for a podcast episode discussing the importance of STEM education. Include interviews with educators, students, and industry professionals.",
      "Compose a letter to teachers introducing a new technology tool for virtual classrooms. Provide training resources and emphasize its benefits.",
      "Draft a proposal for implementing a mentorship program for high school students. Outline the goals, structure, and expected outcomes of the program.",
      "Craft a speech for a graduation ceremony, addressing the achievements of the graduating class and offering words of encouragement for the future.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Formal Writing",
    prompts: [
      "Compose a formal letter of recommendation for a colleague applying for a managerial position. Highlight their key skills, achievements, and work ethic.",
      "Write an official apology letter on behalf of your organization for a service outage. Acknowledge the issue, explain the resolution, and offer compensation if necessary.",
      "Craft an acceptance speech for receiving a prestigious industry award. Express gratitude, acknowledge collaborators, and share insights about the journey.",
      "Develop a press release announcing a partnership between your company and a well-known charity. Emphasize the shared goals and positive impact on the community.",
      "Compose a condolence letter to an employee who has experienced a personal loss. Express sympathy, offer support, and provide any necessary accommodations.",
      "Write a letter of intent for a potential business collaboration. Outline the mutual benefits, shared goals, and proposed next steps for further discussions.",
      "Draft a formal proposal for implementing a new workplace diversity and inclusion program. Detail the objectives, strategies, and expected outcomes.",
      "Create a memorandum for employees regarding changes to the company's remote work policy. Clearly communicate expectations and address potential concerns.",
      "Craft a letter to inform clients about a change in company leadership. Introduce the new leadership team and emphasize continuity and growth.",
      "Write an official statement addressing a public relations crisis. Acknowledge the issue, outline corrective actions, and reassure stakeholders about future improvements.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Business",
    prompts: [
      "Develop a business plan for launching a new e-commerce platform. Include market analysis, revenue projections, and a marketing strategy.",
      "Write a proposal to secure funding for a startup business. Clearly outline the business idea, financial needs, and potential returns for investors.",
      "Compose a letter to clients announcing a new product or service. Highlight its features, benefits, and any promotional offers available upon launch.",
      "Create an executive summary for a business report on industry trends. Summarize key findings, implications, and recommendations for strategic decision-making.",
      "Draft a script for a business presentation on effective communication skills. Include practical tips and examples to engage the audience.",
      "Write a letter to negotiate a business partnership or collaboration. Clearly define terms, expectations, and mutually beneficial outcomes.",
      "Develop marketing copy for an online advertising campaign promoting a limited-time sale. Create a sense of urgency and highlight exclusive offers.",
      "Compose a response to a customer inquiry about product availability. Provide accurate information and suggest alternative options if necessary.",
      "Craft an email communication to employees about changes to company benefits. Clearly explain the updates and address common questions.",
      "Create a set of guidelines for employees on professional etiquette in business meetings. Cover topics such as punctuality, dress code, and active listening.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Training Material",
    prompts: [
      "Write a training manual for new employees on workplace safety procedures. Include guidelines, emergency protocols, and preventive measures.",
      "Develop a set of interactive exercises for a training workshop on conflict resolution. Engage participants in role-playing scenarios to practice skills.",
      "Compose a series of quiz questions for an e-learning module on cybersecurity awareness. Ensure questions cover key concepts and potential threats.",
      "Craft a step-by-step guide for employees on using a new software tool. Include screenshots, troubleshooting tips, and best practices for efficient usage.",
      "Write a script for a video tutorial on effective time management skills. Provide practical tips and tools to enhance productivity in the workplace.",
      "Create a presentation slide deck for a training session on customer service excellence. Include case studies, interactive elements, and discussion points.",
      "Develop a training module for team-building activities. Outline objectives, exercises, and reflections to foster collaboration and communication.",
      "Compose a lesson plan for a diversity and inclusion training workshop. Cover topics such as unconscious bias, cultural competence, and fostering inclusivity.",
      "Write a handbook for mentors participating in a mentorship program. Include guidelines, expectations, and best practices for supporting mentees.",
      "Craft a series of discussion questions for a training seminar on leadership skills. Encourage participants to share insights and experiences related to effective leadership.",
      // ... (5 more prompts)
    ],
  },
  {
    category: "Broadcasting",
    prompts: [
      "Develop a script for a radio show episode highlighting inspiring stories of local community members. Include interviews, anecdotes, and positive messages.",
      "Compose a news report script covering a significant event in your community. Present unbiased information, include quotes, and highlight the impact.",
      "Write a series of interview questions for a television program featuring influential personalities in the broadcasting industry. Focus on career insights and experiences.",
      "Craft a promotional script for a live streaming event. Highlight key features, encourage audience participation, and create a sense of excitement.",
      "Develop a storyboard for a documentary on the history of broadcasting. Include key milestones, influential figures, and technological advancements.",
      "Compose a script for a podcast episode discussing current trends in the entertainment industry. Include insights, interviews, and audience engagement elements.",
      "Write an introduction script for a live event or awards ceremony. Engage the audience, introduce speakers, and set the tone for the occasion.",
      "Create a set of guidelines for radio hosts on conducting interviews with celebrities. Include tips on research, rapport-building, and handling unexpected moments.",
      "Craft a script for a video series showcasing behind-the-scenes moments at a broadcasting studio. Provide insights into the production process and feature team members.",
      "Develop a content outline for a webinar on the future of broadcasting. Cover topics such as emerging technologies, audience trends, and content delivery platforms.",
      // ... (5 more prompts)
    ],
  },
  // ... (more categories)
];

export default promptsArray;
