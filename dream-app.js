// JUST LIKE I IMAGINED - my dream app
// ============================================================


// 1. VALUES, DATA TYPES, AND OPERATIONS
// ============================================================

// PSEUDOCODE:
// 1. Create information about a user's dream experience.
// 2. Store the experience name as a string.
// 3. Store the trip budget as a number.
// 4. Store whether the experience has been completed as a boolean.
// 5. Calculate the remaining budget after purchasing tickets.
// 6. Log the results to test the output.

// SKILL: Values, Data Types, and Operations
const experienceName = "First Trip to Disney World";
const tripBudget = 1500;
const ticketCost = 500;
const experienceCompleted = false;

const remainingBudget = tripBudget - ticketCost;

console.log("Experience:", experienceName);
console.log("Budget:", tripBudget);
console.log("Ticket Cost:", ticketCost);
console.log("Remaining Budget:", remainingBudget);
console.log("Completed:", experienceCompleted);


// 2. STRINGING CHARACTERS TOGETHER
// ============================================================

// PSEUDOCODE:
// 1. Create a user's name.
// 2. Create the name of their dream experience.
// 3. Combine the values into a personalized message.
// 4. Log the message to the console.

// SKILL: Stringing Characters Together
const userName = "Jordan";
const dreamExperience = "first solo vacation";

const welcomeMessage =
  "Hi " + userName + "! Your dream of taking your " +
  dreamExperience + " can become a reality.";

console.log(welcomeMessage);


// 3. CONTROL STRUCTURES AND LOGIC
// ============================================================

// PSEUDOCODE:
// 1. Check whether the user has completed their experience.
// 2. If they have completed it, celebrate their accomplishment.
// 3. If they have not completed it, encourage them to keep planning.
// 4. Log the appropriate message.

// SKILL: Control Structures and Logic
if (experienceCompleted === true) {
  console.log("You did it! You made the experience you imagined.");
} else {
  console.log("Keep planning! You're one step closer to making it happen.");
}


// 4. BUILDING ARRAYS
// ============================================================

// PSEUDOCODE:
// 1. Create an array containing experiences the user wants to have.
// 2. Add another experience to the array.
// 3. Log the entire array.
// 4. Log the number of experiences on the user's list.

// SKILL: Building Arrays
const bucketList = [
  "First Disney World Trip",
  "First Concert",
  "First Solo Vacation"
];

bucketList.push("First Cruise");

console.log("My Bucket List:", bucketList);
console.log("Number of Experiences:", bucketList.length);


// 5. USING ARRAYS
// ============================================================

// PSEUDOCODE:
// 1. Create an array of experiences with different costs.
// 2. Use an array method to find experiences within the user's budget.
// 3. Store the results in a new array.
// 4. Log the affordable experiences.

// SKILL: Using Arrays
const experiences = [
  { name: "First Concert", cost: 150 },
  { name: "Disney World Trip", cost: 1500 },
  { name: "Weekend Beach Trip", cost: 400 },
  { name: "First Cruise", cost: 1200 }
];

const affordableExperiences = experiences.filter(
  (experience) => experience.cost <= tripBudget
);

console.log("Experiences Within My Budget:", affordableExperiences);


// 6. WORKING WITH LOOPS
// ============================================================

// PSEUDOCODE:
// 1. Go through every experience in the bucket list.
// 2. Print each experience one at a time.
// 3. Continue until every experience has been displayed.

// SKILL: Working With Loops
for (let i = 0; i < bucketList.length; i++) {
  console.log("Dream Experience " + (i + 1) + ": " + bucketList[i]);
}
