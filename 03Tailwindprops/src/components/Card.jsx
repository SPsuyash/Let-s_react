import React from 'react' //rfce

// function card(props) {
    function card({userName , clickme="clickme"}){ 
      //default clickme
            // console.log("props",props)
            console.log(userName)
    // console.log(props.userName)
  return (
    <div className="space-y-4">
  <div className="w-96 bg-white text-black shadow rounded">
      w-96
  </div>
  <div className="w-80 bg-white text-black shadow rounded">
      w-80
  </div>
  <div className="w-72 bg-white text-black shadow rounded">
      w-72
  </div>
  <div className="w-64 bg-white text-black shadow rounded">
      w-64
  </div>
  <div className="w-60 bg-white text-black shadow rounded">
      w-60
  </div>
  <div className="w-56 bg-white text-black shadow rounded">
      w-56
  </div>
  <div className="w-52 bg-white text-black shadow rounded">
      w-52
  </div>
  <div className="w-48 bg-white text-black shadow rounded">
      w-48
  </div>
  <h1 className='bg-green-400 text-black p-4 rounded-xl' >TAilwind test</h1>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/14224175/pexels-photo-14224175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {userName}, {clickme}
      </div>
    </figcaption>
  </div>
</figure>
</div>
  )
}

export default card