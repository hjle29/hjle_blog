interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Fashion Mall',
    description: `THE HANDSOME`,
    imgSrc: '/static/images/thehandsome.png',
    href: 'https://www.thehandsome.com/en',
  },
  {
    title: 'A Shopping Mall Back-Office',
    description: `X2BEE`,
    imgSrc: '/static/images/x2bee.png',
    href: 'https://ai-exp.x2bee.com/chatbot/chat-shopping',
  },
]

export default projectsData
