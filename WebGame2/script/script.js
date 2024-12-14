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
  
  