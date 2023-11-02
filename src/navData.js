const navData = [
    {
      id: 1,
      name: "Office Map",
      children: []
    },
    {
      id: 2,
      name: "New Employee Onboarding",
      children: [
        {
          id: 8,
          name: "Onboarding Materials",
          children: []
        },
        {
          id: 9,
          name: "Training",
          children: []
        }
      ]
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            {
              id: "10",
              name: "Summer Picnic"
            },
            {
              id: "11",
              name: "Valentine's Day Party"
            },
            {
              id: "12",
              name: "New Year's Party"
            }
          ]
        },
        {
          id: "7",
          name: "2017",
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      name: "Public Holidays"
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves"
    }
  ];
  
  export default navData;
  