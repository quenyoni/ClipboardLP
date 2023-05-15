


const Benefits = () => {

  const ben = [

    { id: 1, service: 'Quick Search', data: 'Easily search your snippets by content, category, web address, application, and more' },
    {id: 2, service: 'iCloud Sync ', data: 'Instantly saves and syncs snippets across all your devices.' },
    {id: 3, service: 'Complete History ', data: 'Retrieve any snippets from the first moment you started using the app.' }
 

]




  return (
    <div className="bens">{
      ben.map(item => {
        return (
          <div className="benefits-item" key={item.id}>
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