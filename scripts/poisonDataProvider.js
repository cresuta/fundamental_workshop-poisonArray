const poisonArray = [
    {
      id: 1,
      species: "Atropa belladonna",
      commonName: "Deadly Nightshade",
      fatal: true,
      antidote: "Atropine "
    },
    {
      id: 2,
      species: "Conium maculatum",
      commonName: "Hemlock",
      fatal: true,
      antidote: "none"
    },
    {
      id: 3,
      species: "Aconitum",
      commonName: "Wolf's Bane",
      fatal: true,
      antidote: "atropine"
    },
    {
      id: 4,
      species: "Cascabela thevetia",
      commonName: "Yellow oleander",
      fatal: true,
      antidote: "Digoxin-specific antibody fragments"
    },
    {
      id: 5,
      species: "Datura stramonium",
      commonName: "Devil's trumpets",
      fatal: true,
      antidote: "physostigmine"
    }
  ];

  export const usePoison = () => {
    return poisonArray.slice();
  }