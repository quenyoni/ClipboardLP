import blacklist from '../assets/images/icon-blacklist.svg'
import snippet from '../assets/images/icon-text.svg'
import preview from '../assets/images/icon-preview.svg'

const Services = () => {

  const serve = [
    {
      id: 1,
      title: 'Create blacklists',
      data: 'Ensure sensitive  information never makes its way to your clipboard by excluding certain sources.',
      img:blacklist
    },
    {
      id: 2,
      title: 'Plain text snippets',
      data: 'Remove unwanted formatting from copied text for a consistent look.',
      img:snippet
  },
    {
      id: 3,
      title: 'Sneaker preview',
      data: 'Quick preview of all snippet on your Clipboard for easy access',
      img:preview
  }
]


  return (
    
<div className='card'>
    {
      serve.map(item => {
        return (
          <div className='grid-item' key={item.id}>
            <img src={item.img} alt="" />
            <h3 className='sub-heading'>{item.title}</h3>
            <p className='para'>{item.data}</p>

          </div>
        )
      })
      }
      
      </div>

  
 
  )
}

export default Services