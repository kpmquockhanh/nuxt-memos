<template>
  <div class="container mx-auto my-8 space-y-10">

    <h1 class="text-center font-bold text-3xl my-10 text-gray-800 font-mono">Empty State Components Collection</h1>
    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
      <span
        class="bg-green-100 font-mono text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Blank
        Slate Empty State</span>
      </div>
      <div class="flex flex-col justify-center py-12 items-center">

        <div class="flex justify-center items-center">
          <img class="w-64 h-64"
               src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
               alt="image empty states">
        </div>
        <h1 class="text-gray-700 font-medium text-2xl text-center mb-3">Create a Project and get organized!</h1>
        <p class="text-gray-500 text-center mb-6">Project are the backbones of time entry categorization in your
          workspace.</p>
        <div class="flex flex-col justify-center">
          <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6  mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Create New Project
          </button>
          <a href="#" class="underline mt-4 text-sm font-light mx-auto">Learn more</a>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
      <span
        class="bg-blue-100 font-mono text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Zero
        Results Empty State</span>
      </div>
      <div class="flex justify-center py-12 items-center">
        <div class="flex flex-col mt-6 w-full">

          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class=" divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col"
                    class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <button class="flex items-center gap-x-3 focus:outline-none">
                    <span>Company</span>

                    <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                      <path
                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                        fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                      <path
                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                        fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                    </svg>
                  </button>
                </th>

                <th scope="col"
                    class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Status
                </th>

                <th scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  About
                </th>

                <th scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  Users</th>

                <th scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  License use</th>

                <th scope="col" class="relative py-3.5 px-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="w-full text-center mx-auto py-12" colspan="5">
                  <img class="w-32 h-32 mx-auto"
                       src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690261234/di7tvpnzsesyo7vvsrq4.svg"
                       alt="image empty states">
                  <p class="text-gray-700 font-medium text-lg text-center">No vendor data available.</p>
                  <p class="text-gray-500 text-center">You can add new vendor data to display in this table.</p>
                  <button
                    class="flex items-center px-4 py-1.5 border border-gray-400 mt-4 text-gray-600 rounded text-sm hover:bg-blue-600 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6  mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Add New Vendor
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>

    </div>

    <WelcomeApp />

    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
      <span class="bg-red-100 font-mono text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Upsell
        Empty State</span>
      </div>
      <div class="flex flex-col items-center justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-16 h-16 text-gray-500">
          <path fill="currentColor"
                d="M12 1C6.483 1 2 5.483 2 11v2h20v-2c0-5.517-4.483-10-10-10zM12 3c4.418 0 8 3.582 8 8v2H4v-2c0-4.418 3.582-8 8-8zm-1 5.938v3.876c0 .666.438 1.124 1 1.344.563-.22 1-.678 1-1.344V8.938c0-.456-.371-.938-1-.938s-1 .482-1 .938zM10 14v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H6c-.55 0-1-.45-1-1s.45-1 1-1h2V9c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2z">
          </path>
        </svg>
        <h1 class="mt-4 text-gray-700 text-2xl font-semibold text-center">Upgrade to our Premium Plan</h1>
        <p class="mt-2 text-gray-500 text-center">Unlock exclusive features and take your experience to the next level!
        </p>
        <button
          class="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600">
          Upgrade Now
        </button>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
      <span
        class="bg-yellow-100 font-mono text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-green-300">Inbox
        Empty State</span>
      </div>
      <div class="flex flex-col justify-center items-center py-12">
        <svg class="w-24 h-24 text-gray-500 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M5 3C4.5313 3 4.12549 3.32553 4.02381 3.78307L2.02381 12.7831C2.00799 12.8543 2 12.927 2 13V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V13C22 12.927 21.992 12.8543 21.9762 12.7831L19.9762 3.78307C19.8745 3.32553 19.4687 3 19 3H5ZM19.7534 12H15C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12H4.24662L5.80217 5H18.1978L19.7534 12Z">
          </path>
        </svg>
        <p class="text-xl font-semibold text-gray-600 mb-2">Your inbox is empty</p>
        <p class="text-gray-500 text-center mb-6">Start a conversation with your friends to stay connected!</p>
        <button class="px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:bg-blue-600">
          Start a Conversation
        </button>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-10 py-4 bg-white rounded-lg shadow-lg">
      <div>
      <span
        class="bg-green-100 font-mono text-indigo-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-green-300">Cart
        Empty State</span>
      </div>
      <div class="flex flex-col items-center justify-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-24 w-24 text-gray-400 mb-4">
          <path
            d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z">
          </path>
        </svg>
        <p class="text-gray-600 text-lg font-semibold mb-4">Your shopping cart is empty.</p>
        <button
          class="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
          Let's go shopping!
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import WelcomeApp from '@/views/WelcomeApp.vue'
</script>
