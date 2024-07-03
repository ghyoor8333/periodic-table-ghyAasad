// const elements = [
//   {
//     "atomic_number": 1,
//     "name": "Hydrogen",
//     "symbol": "H",
//     "atomic_weight": 1.008,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 2,
//     "name": "Helium",
//     "symbol": "He",
//     "atomic_weight": 4.0026,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 3,
//     "name": "Lithium",
//     "symbol": "Li",
//     "atomic_weight": 6.94,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 4,
//     "name": "Beryllium",
//     "symbol": "Be",
//     "atomic_weight": 9.0122,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 5,
//     "name": "Boron",
//     "symbol": "B",
//     "atomic_weight": 10.81,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 6,
//     "name": "Carbon",
//     "symbol": "C",
//     "atomic_weight": 12.011,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 7,
//     "name": "Nitrogen",
//     "symbol": "N",
//     "atomic_weight": 14.007,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 8,
//     "name": "Oxygen",
//     "symbol": "O",
//     "atomic_weight": 15.999,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 9,
//     "name": "Fluorine",
//     "symbol": "F",
//     "atomic_weight": 18.998,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 10,
//     "name": "Neon",
//     "symbol": "Ne",
//     "atomic_weight": 20.180,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 11,
//     "name": "Sodium",
//     "symbol": "Na",
//     "atomic_weight": 22.990,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 12,
//     "name": "Magnesium",
//     "symbol": "Mg",
//     "atomic_weight": 24.305,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 13,
//     "name": "Aluminum",
//     "symbol": "Al",
//     "atomic_weight": 26.982,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 14,
//     "name": "Silicon",
//     "symbol": "Si",
//     "atomic_weight": 28.085,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 15,
//     "name": "Phosphorus",
//     "symbol": "P",
//     "atomic_weight": 30.974,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 16,
//     "name": "Sulfur",
//     "symbol": "S",
//     "atomic_weight": 32.06,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 17,
//     "name": "Chlorine",
//     "symbol": "Cl",
//     "atomic_weight": 35.45,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 18,
//     "name": "Argon",
//     "symbol": "Ar",
//     "atomic_weight": 39.948,
//     "state_at_room_temperature": "gas"
//   },
//   {
//     "atomic_number": 19,
//     "name": "Potassium",
//     "symbol": "K",
//     "atomic_weight": 39.098,
//     "state_at_room_temperature": "solid"
//   },
//   {
//     "atomic_number": 20,
//     "name": "Calcium",
//     "symbol": "Ca",
//     "atomic_weight": 40.078,
//     "state_at_room_temperature": "solid"
//   }
// ];


  

// $(document).ready(function () {
//     $('.elements').click(function () {
//         $('.details-div').show('slow');
//         var atomicNumber = $(this).attr('atomic-number');
//         PopulatePopupDetails(atomicNumber);
//     });
//     $('.close-btn').click(function () {
//         $('.details-div').hide('slow');
//     });
// });




// function PopulatePopupDetails(atomicNumber){
//     const element = elements.find(e => e.atomic_number == atomicNumber);
//   // Check if element was found
//   if (element) {
//     $('.element-name').text(element.name);
//     $('.atomic-number').text(`Atomic number: ${element.atomic_number}`);
//     $('.states').text(`State at room temperature: ${element.state_at_room_temperature}`);
//     $('.short-elem-name').text(element.symbol);
//     $('.atomic-weight').text(`Atomic weight: ${element.atomic_weight}`);
//     $('.details-div').show();
//   } else {
//     console.error(`Element with atomic number ${atomicNumber} not found.`);
//   }    
// }

const elements = [
  { "atomic_number": 1, "name": "Hydrogen", "symbol": "H", "atomic_weight": 1.008, "state_at_room_temperature": "gas", "valency": 1, "type": "non-metal" },
  { "atomic_number": 2, "name": "Helium", "symbol": "He", "atomic_weight": 4.0026, "state_at_room_temperature": "gas", "valency": 0, "type": "noble gas" },
  { "atomic_number": 3, "name": "Lithium", "symbol": "Li", "atomic_weight": 6.94, "state_at_room_temperature": "solid", "valency": 1, "type": "metal" },
  { "atomic_number": 4, "name": "Beryllium", "symbol": "Be", "atomic_weight": 9.0122, "state_at_room_temperature": "solid", "valency": 2, "type": "metal" },
  { "atomic_number": 5, "name": "Boron", "symbol": "B", "atomic_weight": 10.81, "state_at_room_temperature": "solid", "valency": 3, "type": "metalloid" },
  { "atomic_number": 6, "name": "Carbon", "symbol": "C", "atomic_weight": 12.011, "state_at_room_temperature": "solid", "valency": 4, "type": "non-metal" },
  { "atomic_number": 7, "name": "Nitrogen", "symbol": "N", "atomic_weight": 14.007, "state_at_room_temperature": "gas", "valency": 3, "type": "non-metal" },
  { "atomic_number": 8, "name": "Oxygen", "symbol": "O", "atomic_weight": 15.999, "state_at_room_temperature": "gas", "valency": 2, "type": "non-metal" },
  { "atomic_number": 9, "name": "Fluorine", "symbol": "F", "atomic_weight": 18.998, "state_at_room_temperature": "gas", "valency": 1, "type": "non-metal" },
  { "atomic_number": 10, "name": "Neon", "symbol": "Ne", "atomic_weight": 20.180, "state_at_room_temperature": "gas", "valency": 0, "type": "noble gas" },
  { "atomic_number": 11, "name": "Sodium", "symbol": "Na", "atomic_weight": 22.990, "state_at_room_temperature": "solid", "valency": 1, "type": "metal" },
  { "atomic_number": 12, "name": "Magnesium", "symbol": "Mg", "atomic_weight": 24.305, "state_at_room_temperature": "solid", "valency": 2, "type": "metal" },
  { "atomic_number": 13, "name": "Aluminum", "symbol": "Al", "atomic_weight": 26.982, "state_at_room_temperature": "solid", "valency": 3, "type": "metal" },
  { "atomic_number": 14, "name": "Silicon", "symbol": "Si", "atomic_weight": 28.085, "state_at_room_temperature": "solid", "valency": 4, "type": "metalloid" },
  { "atomic_number": 15, "name": "Phosphorus", "symbol": "P", "atomic_weight": 30.974, "state_at_room_temperature": "solid", "valency": 3, "type": "non-metal" },
  { "atomic_number": 16, "name": "Sulfur", "symbol": "S", "atomic_weight": 32.06, "state_at_room_temperature": "solid", "valency": 2, "type": "non-metal" },
  { "atomic_number": 17, "name": "Chlorine", "symbol": "Cl", "atomic_weight": 35.45, "state_at_room_temperature": "gas", "valency": 1, "type": "non-metal" },
  { "atomic_number": 18, "name": "Argon", "symbol": "Ar", "atomic_weight": 39.948, "state_at_room_temperature": "gas", "valency": 0, "type": "noble gas" },
  { "atomic_number": 19, "name": "Potassium", "symbol": "K", "atomic_weight": 39.098, "state_at_room_temperature": "solid", "valency": 1, "type": "metal" },
  { "atomic_number": 20, "name": "Calcium", "symbol": "Ca", "atomic_weight": 40.078, "state_at_room_temperature": "solid", "valency": 2, "type": "metal" }
];
$(document).ready(function () {
  $('.elements').click(function () {
    $('.details-div').show('slow');
    var atomicNumber = $(this).attr('atomic-number');
    PopulatePopupDetails(atomicNumber);
    $('.result').text("");
  });
  $('.close-btn').click(function () {
    $('.details-div').hide('slow');
  });
});

function PopulatePopupDetails(atomicNumber) {
  const element = elements.find(e => e.atomic_number == atomicNumber);
  if (element) {
    $('.element-name').text(element.name);
    $('.atomic-number').text(`Atomic number: ${element.atomic_number}`);
    $('.states').text(`State at room temperature: ${element.state_at_room_temperature}`);
    $('.short-elem-name').text(element.symbol);
    $('.atomic-weight').text(`Atomic weight: ${element.atomic_weight}`);
    $('.valency').text(`Valency: ${element.valency}`);

    const reactWithDropdown = $('#react-with');
    reactWithDropdown.empty();
    reactWithDropdown.append('<option value="">Choose element</option>'); // Add default option
    elements.filter(e => e.atomic_number != atomicNumber).forEach(e => {
      reactWithDropdown.append(`<option value="${e.atomic_number}">${e.name}</option>`);
    });

    $('#react-with').off('change').on('change', function () {
      const selectedAtomicNumber = $(this).val();
      ShowCompound(element, selectedAtomicNumber);
    });

    $('.details-div').show();
  } else {
    console.error(`Element with atomic number ${atomicNumber} not found.`);
  }
}

function ShowCompound(element1, atomicNumber2) {
  const element2 = elements.find(e => e.atomic_number == atomicNumber2);
  if (!element2) return;

  const resultDiv = $('.result');

  if (element1.type == 'noble gas' || element2.type == 'noble gas') {
    resultDiv.text('Noble gas doesn\'t react');
    return;
  }

  const valency1 = element1.valency;
  const valency2 = element2.valency;
  const isMetal1 = element1.type == 'metal';
  const isMetal2 = element2.type == 'metal';

  if (isMetal1 && isMetal2) {
    resultDiv.text('Two metals don\'t react');
    return;
  }

  const ratio1 = valency2;
  const ratio2 = valency1;
  let formula;

  if ((isMetal1 && !isMetal2) || (!isMetal1 && isMetal2)) {
    if (isMetal1) {
      formula = `${element1.symbol}${ratio1 > 1 ? ratio1 : ''}${element2.symbol}${ratio2 > 1 ? ratio2 : ''}`;
    } else {
      formula = `${element2.symbol}${ratio2 > 1 ? ratio2 : ''}${element1.symbol}${ratio1 > 1 ? ratio1 : ''}`;
    }
  } else {
    formula = `${element1.symbol}${ratio1 > 1 ? ratio1 : ''}${element2.symbol}${ratio2 > 1 ? ratio2 : ''}`;
  }
 
  resultDiv.text(`Compound formed will be: ${formula}`);
}
