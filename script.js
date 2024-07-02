const elements = [
    {
      "atomic_number": 1,
      "name": "Hydrogen",
      "symbol": "H",
      "atomic_weight": 1.008,
      "state_at_room_temperature": "gas"
    },
    {
      "atomic_number": 2,
      "name": "Helium",
      "symbol": "He",
      "atomic_weight": 4.0026,
      "state_at_room_temperature": "gas"
    },
    {
      "atomic_number": 3,
      "name": "Lithium",
      "symbol": "Li",
      "atomic_weight": 6.94,
      "state_at_room_temperature": "solid"
    },
    {
      "atomic_number": 4,
      "name": "Beryllium",
      "symbol": "Be",
      "atomic_weight": 9.0122,
      "state_at_room_temperature": "solid"
    },
    {
      "atomic_number": 5,
      "name": "Boron",
      "symbol": "B",
      "atomic_weight": 10.81,
      "state_at_room_temperature": "solid"
    },
    {
      "atomic_number": 6,
      "name": "Carbon",
      "symbol": "C",
      "atomic_weight": 12.011,
      "state_at_room_temperature": "solid"
    },
    {
      "atomic_number": 7,
      "name": "Nitrogen",
      "symbol": "N",
      "atomic_weight": 14.007,
      "state_at_room_temperature": "gas"
    },
    {
      "atomic_number": 8,
      "name": "Oxygen",
      "symbol": "O",
      "atomic_weight": 15.999,
      "state_at_room_temperature": "gas"
    },
    {
      "atomic_number": 9,
      "name": "Fluorine",
      "symbol": "F",
      "atomic_weight": 18.998,
      "state_at_room_temperature": "gas"
    },
    {
      "atomic_number": 10,
      "name": "Neon",
      "symbol": "Ne",
      "atomic_weight": 20.180,
      "state_at_room_temperature": "gas"
    }
  ];

  

$(document).ready(function () {
    $('.elements').click(function () {
        // $('.atomic-number').html("HI I AM NTH ELEMENT OF PERIODIC TABLE");
        // $('.details-div').fadeIn('slow');
        $('.details-div').show('slow');
        var atomicNumber = $(this).attr('atomic-number'); // Get the 'data-atomic-number' attribute value
        // alert(`Atomic number clicked: ${atomicNumber}`);
    });
    $('.close-btn').click(function () {
        $('.details-div').hide('slow');
    });
    // $('.close-btn').click(function () {
    //     $('.atomic-number').html("HI I AM NTH ELEMENT OF PERIODIC TABLE");
    // });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const closeButton = document.querySelector('.close-btn');
//     const detailsDiv = document.querySelector('.details-div');
    
//     closeButton.addEventListener('click', function () {
//         detailsDiv.style.display = 'none';
//     });
// });


function PopulatePopupDetails(atomicNumber){
    const element = elements.find(e => e.atomic_number == atomicNumber);
  // Check if element was found
  if (element) {
    // Populate details in .details-div
    $('.element-name').text(element.name);
    $('.atomic-number').text(`Atomic number: ${element.atomic_number}`);
    $('.states').text(`State at room temperature: ${element.state_at_room_temperature}`);
    $('.short-elem-name').text(element.symbol);
    $('.atomic-weight').text(`Atomic weight: ${element.atomic_weight}`);

    // Show .details-div
    $('.details-div').show();
  } else {
    console.error(`Element with atomic number ${atomicNumber} not found.`);
  }
    
}