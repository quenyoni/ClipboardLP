


const Benefits = () => {

  const ben = [

    { id: 1, service: 'Quick Search', data: 'Easily search your snippets by content, category, web address, application, and more',duration:1000 },
    {id: 2, service: 'iCloud Sync ', data: 'Instantly saves and syncs snippets across all your devices.',duration:2000 },
    {id: 3, service: 'Complete History ', data: 'Retrieve any snippets from the first moment you started using the app.',duration:3000 }
 

]




  return (
    <div className="bens">{
      ben.map(item => {
        return (
          <div data-aos="fade-up"
     data-aos-duration={item.duration} className="benefits-item" key={item.id}>
            <h3>{item.service}</h3>
            <p className="para">
              {item.data}
            </p>
            

            </div>
        )
      })
    }

    </div>
  )
}

export default Benefits