// Array of chests to roll from
const chests = [
    {
        id: 1,
      text: "Funny man.",
      rarity: "Common",
      image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
    },
    {
        id: 2,
      text: "Funny woman.",
      rarity: "Uncommon",
      image: "https://i0.wp.com/teakisi.com/wp-content/uploads/2020/02/3B0B3060-0309-47DE-82C9-08D4369A710F.jpeg?fit=960%2C1200&ssl=1"
    },
    {
        id: 3,
      text: "Funny old woman.",
      rarity: "Rare",
      image: "https://miro.medium.com/v2/resize:fit:400/0*lBGoJMPQ2eIClUg-.jpg"
    },
    {
        id: 4,
      text: "Funny older woman.",
      rarity: "Legendary",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3YKJp2MSTd2f0ZAM0FXsWbSnj6dx0d8MAg&s"
    },

    {
        id: 5,
        text: "Cool Guy.",
        rarity: "Legendary",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEL0Kusci01cnG96DhRqkDpNLtuHTnpHoB9g&s"
    },

    {
        id: 6,
        text: "Sigma. Male.",
        rarity: "Rare",
        image: "https://i.etsystatic.com/42867967/r/il/e11ecb/5192383069/il_570xN.5192383069_5ht8.jpg"
    },

    {
        id: 7,
        text: "Your son.",
        rarity: "Common",
        image: "https://valor-dictus.com/wp-content/uploads/2023/03/furryfandompic2.jpg"
    },

    {
        id: 8,
        text: "FemBoy.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGeMhd_VEQFlYLKTyNr_o_ae_3_QVn55e9fA&s"
    },

    {
        id: 9,
        text: "Femboy Plus Furry",
        rarity: "Rare",
        image: "https://i1.sndcdn.com/artworks-yHA1vLJtyyCrK5Yu-hgfCMQ-t500x500.jpg "
    },

    {
        id: 10,
        text: "Black guy",
        rarity: "Common",
        image: " https://i.pinimg.com/564x/80/ee/b1/80eeb1f56285e48d13f94c786b530db2.jpg"
    },

    {
        id: 11,
        text: "Moro.",
        rarity: "Common",
        image: "https://miro.medium.com/v2/resize:fit:800/1*CAhlikvZ1IcY8jZD9aP62A.jpeg "
    },

    {
        id: 12,
        text: "Just a Jew.",
        rarity: "Common",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKrr83P1n-dxc3TXYB_vij4kwRVEJrHfyiw&s "
    },

    {
        id: 13,
        text: "Your Mom.",
        rarity: "Common",
        image: "https://cdn.pixabay.com/photo/2015/10/08/15/46/portuguese-977978_640.jpg "
    },

    {
        id: 14,
        text: "Diddy.",
        rarity: "Rare",
        image: "https://dims.apnews.com/dims4/default/4f85cc3/2147483647/strip/true/crop/6000x4000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff9%2F37%2Fd06eb0cbd2d100a5775e11cb24b0%2F1b358015f8f7444fa823d51559e370b9 "
    },

    {
        id: 15,
        text: "Gangsta Sponge.",
        rarity: "Rare",
        image: "https://ih1.redbubble.net/image.4732409416.2246/st,large,507x507-pad,600x600,f8f8f8.u4.webp "
    },

    {
        id: 16,
        text: "Better Luffy",
        rarity: "Common",
        image: "https://i.pinimg.com/736x/1f/55/44/1f55449f9aae6e1a09a3a60e8e0f1b64.jpg "
    },

    {
        id: 17,
        text: "Luffy Mexican",
        rarity: "Common",
        image: "https://i.pinimg.com/originals/6c/1d/a2/6c1da2f6dae4b6ed5574d55a72e13f8c.jpg "
    },

    {
        id: 18,
        text: "Luffy.",
        rarity: "Rare",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6X--cg-030qRtxLfH2xu7g2xeXin_BVKo1Q&s"
    },

    {
        id: 19,
        text: "Gojo.",
        rarity: "Rare",
        image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndELwPtJp6NzHTn0vclpkSvFJ-HFBVU58GA&s"
    },

    {
        id: 20,
        text: "Black Gojo.",
        rarity: "Common",
        image: "https://i.ytimg.com/vi/9DARWZL0COM/maxresdefault.jpg "
    },

    {
        id: 21,
        text: "Gojo 2.",
        rarity: "Rare",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXphE_h8Mdrx0gBg9PQaiyVzfhebyPfAlyg&s "
    },

    {
        id: 22,
        text: "Doxx.",
        rarity: "Common",
        image: "https://i.ytimg.com/vi/RvThBVRgF8Y/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAzHt8emdbo4ftnpuJOgfV87Mz_7w "
    },

    

    {
        id: 23,
        text: "Allan.",
        rarity: "Common",
        image: "https://i.imgflip.com/57c2if.png?a481656 "
    },

    { 
      id: 24, 
      text: "ZAMMM",
      rarity: "Common",
      image: "https://preview.redd.it/just-a-typical-meme-shitpost-collection-v0-4i3zk88sws1c1.jpg?width=606&format=pjpg&auto=webp&s=a6e28e27ce534ea43fe5e9b10ff333e861e331ad"
  },
  { 
      id: 25, 
      text: "trolge salad",
      rarity: "Common",
      image: "https://media.tenor.com/PT8CRN-iD7EAAAAM/watermelon-troll.gif"
  },
  { 
      id: 26, 
      text: "Ni",
      rarity: "Legendary",
      image: "https://i.ytimg.com/vi/DkC2Yx7lNOo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvwZqD4-cO0jI7S6Y9tziGkrDkOQ"
  },
  { 
      id: 27, 
      text: "ni2",
      rarity: "common",
      image: "https://i.ytimg.com/vi/5BsCge_PUqc/maxresdefault.jpg"
  },
  { 
      id: 28, 
      text: "Donkey",
      rarity: "Uncommon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9Ld6D_XxCj4KmVBuB9cpTiFAXHwCIxmneA&s"
  },
  { 
      id: 29, 
      text: "German pose",
      rarity: "Rare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRmJBfTERe1Ju7FNHnzRcLRpTdekGF2DA8A&s"
  },
  { 
      id: 30, 
      text: "Steve",
      rarity: "Legendary",
      image: "https://static.wikia.nocookie.net/youtubepedia/images/8/80/ALEXISHITPOST.jpg/revision/latest?cb=20230624175130&path-prefix=es"
  },
  { 
      id: 31, 
      text: "Meme Lord",
      rarity: "Common",
      image: ""
  },
  { 
      id: 32, 
      text: "Goth girlfriend",
      rarity: "Legendary",
      image: "https://preview.redd.it/something-akin-this-goth-girl-the-heads-all-i-really-need-v0-dupd5sy5u7nc1.png?auto=webp&s=587ca3e276fe3e2a923e67f261528d378d8ec159"
  },
  { 
      id: 33, 
      text: "Chef",
      rarity: "Uncommon",
      image: "https://i1.sndcdn.com/artworks-FRdIVSE7yJ2SHjAj-pxe7qQ-t240x240.jpg"
  },
  { 
      id: 34, 
      text: "Kanye West",
      rarity: "Rare",
      image: "https://static.wikia.nocookie.net/vgost/images/9/9f/KanyeWest.webp/revision/latest?cb=20240220163852"
  },
  { 
      id: 35, 
      text: "Kanye east",
      rarity: "Uncommon",
      image: "https://preview.redd.it/kanye-east-v0-zukoz4j80nsd1.jpeg?auto=webp&s=32251c5a9a497b97f09704d47bcf46d90398dbba"
  },
  { 
      id: 36, 
      text: "Time Traveler",
      rarity: "Legendary",
      image: ""
  },
  { 
      id: 37, 
      text: "Disco King",
      rarity: "Common",
      image: "https://source.boomplaymusic.com/group10/M00/07/20/2649763ce38a4613b248aeed797d07d6_320_320.jpg"
  },
  { 
      id: 38, 
      text: "Informatico",
      rarity: "Rare",
      image: "https://us-tuna-sounds-images.voicemod.net/98b54431-9e1a-4d14-a60a-7076e50865ad-1661495307607.jpg"
  },
  { 
      id: 39, 
      text: "Youtube1",
      rarity: "Uncommon",
      image: "https://i.imgflip.com/96fh8f.jpg"
  },
  { 
      id: 40, 
      text: "Mr Beast!!",
      rarity: "Rare",
      image: "https://i.redd.it/mr-beast-is-not-the-savior-of-humanity-wake-up-v0-za3uzmz0nk5c1.jpg?width=2048&format=pjpg&auto=webp&s=6398532978926597399019108dc7f02d823faadc"
  },
  { 
      id: 41, 
      text: "Peruman",
      rarity: "Legendary",
      image: "https://preview.redd.it/7qgpgzt0v3471.jpg?width=640&crop=smart&auto=webp&s=633529cbac24197a71d82f05d112f1c57838fbfe"
  },
  { 
      id: 42, 
      text: "Peru Man",
      rarity: "Legendary",
      image: "https://images3.memedroid.com/images/UPLOADED315/6307f68bb10e6.jpeg"
  },
  { 
      id: 43, 
      text: "Ichigo",
      rarity: "Legendary",
      image: "https://static.wikia.nocookie.net/bleach/images/5/52/591Ichigo_profile.png/revision/latest/scale-to-width/360?cb=20190129174528&path-prefix=en"
  },
  { 
      id: 44, 
      text: "Rukia",
      rarity: "Legendary",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/RukiaKuchikiKubo.jpg/220px-RukiaKuchikiKubo.jpg"
  },
  { 
      id: 45, 
      text: "Sukuna",
      rarity: "Rare",
      image: "https://preview.redd.it/why-did-sukuna-stick-his-tongue-out-on-every-cover-is-he-a-v0-lei1e6drro1e1.png?width=2304&format=png&auto=webp&s=d233aeebdd7c95af105a8dcfe76a3681f957a116"
  },
  { 
      id: 46, 
      text: "Freaky Sukuna",
      rarity: "Legendary",
      image: "https://cdn.talkie-ai.com/talkie-user-img/180235604930631/194463055503686-2.jpeg"
  },
  { 
      id: 47, 
      text: "Black Sukuna",
      rarity: "Common",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx7V960L7GFFWhkCkh00FTnZCls8meyeVGw&s"
  },
  { 
      id: 48, 
      text: "SoyJack TRIO",
      rarity: "Rare",
      image: "https://i.kym-cdn.com/editorials/icons/mobile/000/004/975/soyjak.jpg"
  },
  { 
      id: 49, 
      text: "Soy Jack Ireland",
      rarity: "Legendary",
      image: "https://i.imgflip.com/7xc2jz.png"
  },
  { 
      id: 50, 
      text: "Soyjack",
      rarity: "Uncommon",
      image: "https://ih1.redbubble.net/image.3572292226.1478/st,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  { 
      id: 51, 
      text: "Weird ass fucking wojak",
      rarity: "Rare",
      image: "https://media.tenor.com/XM7l1WIgYrMAAAAe/soyjack-wojack.png"
  },
  { 
      id: 52, 
      text: "Bob jack (realistic edition)",
      rarity: "Common",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbN0kIf786xdqCMeftl-Q6-E-cRArg4ApBfg&s"
  },
  { 
      id: 53, 
      text: "Doomerjak",
      rarity: "Rare",
      image: "https://static.displate.com/857x1200/displate/2020-07-08/0f0626e6d1be3bc1f6697fd13f6ad676_a34f6c69fa46f2d0d7f51999caee7d11.jpg"
  },
  { 
      id: 54, 
      text: "Niguto",
      rarity: "Uncommon",
      image: "https://pics.craiyon.com/2023-07-31/79f7379ff98d4539bf9097904a7ea2a9.webp"
  },
  { 
      id: 55, 
      text: "Sousgger",
      rarity: "Common",
      image: "https://static.wikia.nocookie.net/narutooriginals/images/2/2c/MV5BMzZkYmZlZTYtZTk0My00MmRhLTk2ZDQtYTM5MmU4Y2E0Mj.png/revision/latest/scale-to-width-down/630?cb=20221017213847"
  },
  { 
      id: 56, 
      text: "Niguto (Realistic edition)",
      rarity: "Rare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlU8zKq6dX6Ik2j2wasx3oSBZCZtMoYSeQg&s"
  },
  { 
      id: 57, 
      text: "Cigerate",
      rarity: "Legendary",
      image: "https://i.pinimg.com/236x/94/ff/d0/94ffd01faf09befac8c1601c76427531.jpg"
  },
  { 
      id: 58, 
      text: "Real life Gojo",
      rarity: "Common",
      image: "https://i.ytimg.com/vi/mDoZDbi1YHk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgSihKMA8=&rs=AOn4CLDWXHmmmxX2g-nJ2jq8rkiMCa94Kg"
  },
  { 
      id: 59, 
      text: "Funny dude",
      rarity: "Uncommon",
      image: "https://64.media.tumblr.com/2a13009554c41ee8c4d7be8ea07c7975/b073c755569fdbdf-d7/s1280x1920/731ea69aacfb48dab87e336291b4d6a193447718.png"
  },
  { 
      id: 60, 
      text: "Smile",
      rarity: "Legendary",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fdhgo333%2Fanalog-horror%2F&psig=AOvVaw1J0uwXqMKWlqMhDDNRQVau&ust=1734295280570000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCd7MOPqIoDFQAAAAAdAAAAABAJ"
  },
  { 
      id: 61, 
      text: "Swamp Creature",
      rarity: "Rare",
      image: "https://preview.redd.it/what-are-your-favorite-analog-horror-series-ill-go-first-v0-yilmtg3njfgc1.jpeg?auto=webp&s=860963fb1139d1720bf001aecf0a231ee04f3e0b"
  },
  { 
      id: 62, 
      text: "Tech Genius",
      rarity: "Uncommon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVzrnlV1hPCkR3hiSVtzqJcxwjyjeOs3mGk_D9ju-Z5KcZbjAhlJZSs4DYmWRmfiG7SU&usqp=CAU"
  },
  { 
      id: 63, 
      text: "Doors",
      rarity: "Rare",
      image: "https://i.ytimg.com/vi/czJ52g6984o/sddefault.jpg?v=63a623c5"
  },
  { 
      id: 64, 
      text: "Troll King",
      rarity: "Common",
      image: "https://static.wikia.nocookie.net/analog-horror-0/images/7/7a/Doctor_nowhere.jpg/revision/latest/smart/width/250/height/250?cb=20240408002736"
  },
  { 
      id: 65, 
      text: "Mystic Oracle",
      rarity: "Legendary",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHDLC2c7laNMuocepYlB-zfSkw2KPzQoW-g&s"
  },
  { 
      id: 66, 
      text: "Cat",
      rarity: "Rare",
      image: "https://i.redd.it/some-screenshots-of-the-thing-from-warrior-cats-fandubs-v0-oqv26jg8w5sd1.jpg?width=2532&format=pjpg&auto=webp&s=d51910d2ff5b176f2ef4b5103d4f941cbf7b6db4"
  },
  { 
      id: 67, 
      text: "Dude",
      rarity: "Uncommon",
      image: "https://static.wikia.nocookie.net/analog-horror-0/images/8/8d/T.O.E._-_starving.help.jpg/revision/latest?cb=20240407054810"
  },
  { 
      id: 68, 
      text: "Miquel Pons",
      rarity: "Rare",
      image: "https://media.tenor.com/rgk7ENBoNhMAAAAe/meme-shitpost.png"
  },
  { 
      id: 69, 
      text: "Jaime",
      rarity: "Uncommon",
      image: "https://static.wikia.nocookie.net/beluga/images/e/ee/Fat_guy.jpeg/revision/latest/smart/width/250/height/250?cb=20221023124504"
  },
  { 
      id: 70, 
      text: "Knight of Light",
      rarity: "Legendary",
      image: "https://live-production.wcms.abc-cdn.net.au/cc91eda3463a150968dfa13b3e6ec517?impolicy=wcms_crop_resize&cropH=358&cropW=638&xPos=0&yPos=0&width=862&height=485"
  }

  ];
  
// Roll function that updates the content
document.getElementById('roll-button').addEventListener('click', function() {
    rollChest();
    // Disable the roll button during the animation
    document.getElementById('roll-button').disabled = true;
  });
  
  // Inventory to store the items the user has rolled
  const inventory = {}; // Store inventory data as an object with image IDs as keys
  
  function rollChest() {
    // Get a random chest from the chests array
    const randomChest = chests[Math.floor(Math.random() * chests.length)];
  
    // Set initial message and image
    document.getElementById('prompt-text').innerText = "Rolling...";
    let intervalTime = 100; // Start with fast rolling
    let currentIndex = 0;
  
    // This function changes the image rapidly
    const rollInterval = setInterval(() => {
      // Keep getting a random chest for animation (this is just for animation, not the final roll)
      const randomChestForAnimation = chests[Math.floor(Math.random() * chests.length)];
      document.getElementById('chest-name').innerText = randomChestForAnimation.text; // Display animation text
      document.getElementById('chest-rarity').innerText = "Rarity: " + randomChestForAnimation.rarity; // Display animation rarity
      document.getElementById('chest-image').src = randomChestForAnimation.image;  // Display animation image
  
      // Slow down the interval after a few rotations
      if (intervalTime > 50) {
        intervalTime -= 10;
      }
  
      // After a certain time, stop the interval
      if (currentIndex >= 20) {
        clearInterval(rollInterval); // Stop the rolling
        // Show the final chest's text and image after stopping
        document.getElementById('chest-name').innerText = randomChest.text; // Show final name
        document.getElementById('chest-rarity').innerText = "Rarity: " + randomChest.rarity; // Show final rarity
        document.getElementById('chest-image').src = randomChest.image;  // Show final image
        // Enable the roll button again
        document.getElementById('roll-button').disabled = false;
  
        // After rolling, update the inventory with the actual rolled chest
        updateInventory(randomChest);
      }
  
      currentIndex++;
    }, intervalTime);
  }


  // Inventory function to update the player's collection
  function updateInventory(randomChest) {
    // Check if the item is already in the inventory
    if (inventory[randomChest.id]) {
      // Increment the count if it's already in the inventory
      inventory[randomChest.id].count += 1; 
    } else {
      // Otherwise, add the new image to the inventory with a count of 1
      inventory[randomChest.id] = {
        image: randomChest.image,
        text: randomChest.text,
        rarity: randomChest.rarity,
        count: 1
      };
    }
  
    // Update the UI to reflect the inventory
    renderInventory();
  }
  
// Render the inventory
function renderInventory() {
    const inventoryContainer = document.getElementById('inventory-container');
    inventoryContainer.innerHTML = ''; // Clear the container before rendering
  
    // Loop through the inventory and create HTML elements for each item
    for (const key in inventory) {
      const item = inventory[key];
  
      // Create the inventory item element
      const inventoryItem = document.createElement('div');
      inventoryItem.classList.add('inventory-item');
  
      // Add the image
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.text;  // Add alt text for accessibility
      inventoryItem.appendChild(img);
  
      // Add the text and count
      const text = document.createElement('span');
      text.innerText = `${item.text} x${item.count} (Rarity: ${item.rarity})`;
      inventoryItem.appendChild(text);
  
      // Append the item to the inventory container
      inventoryContainer.appendChild(inventoryItem);
    }
  }
  
  