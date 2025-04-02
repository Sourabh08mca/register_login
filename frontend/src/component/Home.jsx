
import React from 'react'

function Home() {
  return (
    <div>
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden mt-1.5">
  <div class="absolute inset-0">
    <img src="https://thumbs.dreamstime.com/z/coding-wallpaper-ai-robot-algorithms-future-warfare-cyber-attack-concept-155190388.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p class="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <a href="/login" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Sign in</a>
  </div>
</div>

    </div>
  )
}

export default Home
