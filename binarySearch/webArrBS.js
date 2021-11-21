// Number array literal
const students = [
  {
    id: 1,
    name: "Suraj Keshari",
    standard: 11,
    percentage: 80,
    stream: "Science",
    contactNo: 9856123654,
  },
  {
    id: 2,
    name: "Sura Kesari",
    standard: 12,
    percentage: 85,
    stream: "Science",
    contactNo: 9856124654,
  },
  {
    id: 3,
    name: "Raj THapa",
    standard: 11,
    percentage: 70,
    stream: "Management",
    contactNo: 9856129654,
  },
  {
    id: 4,
    name: "Ram Bahadur",
    standard: 12,
    percentage: 60,
    stream: "Arts",
    contactNo: 9836123654,
  },
  {
    id: 5,
    name: "Jarus Keshari",
    standard: 11,
    percentage: 89,
    stream: "Science",
    contactNo: 9856623654,
  },
  {
    id: 6,
    name: "Aj Gurung",
    standard: 12,
    percentage: 75,
    stream: "Management",
    contactNo: 9856123654,
  },
  {
    id: 7,
    name: "Raju Kcri",
    standard: 12,
    percentage: 70,
    stream: "Arts",
    contactNo: 9854123654,
  },
  {
    id: 8,
    name: "Suraj Kcri",
    standard: 11,
    percentage: 90,
    stream: "Science",
    contactNo: 9856123654,
  },
  {
    id: 9,
    name: "Ramri Thapa",
    standard: 11,
    percentage: 80,
    stream: "Management",
    contactNo: 9856123653,
  },
  {
    id: 10,
    name: "Rohit Singh",
    standard: 12,
    percentage: 86,
    stream: "Science",
    contactNo: 9856125654,
  },
];

const target = "Suraj Keshari";

// Binary Search for the sorted array.
const studentBinarySearch = (target) => {
  students.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    if (x < y) return -1;
    return 0;
  });

  let low = 0;
  let high = students.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (students[mid].name.toLowerCase() === target) {
      return { index: mid, success: 1, student: students[mid] };
    }

    if (students[mid].name.toLowerCase() > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return { index: -1, success: -1, student: {} };
};

const { success, index, student } = studentBinarySearch(target.toLowerCase());

if (success === 1) {
  console.log(`We found the MATCH at index ${index}`);
  console.log("Student Details: ", student);
} else {
  console.log(`Sorry, no such element in the record returning ${index}`);
}
