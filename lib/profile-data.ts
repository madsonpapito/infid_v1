
export const MALE_NAMES = [
    "Alejandro", "Mateo", "Santiago", "Sebastián", "Leonardo", "Felipe", "Daniel", "Diego", "Joaquín", "Nicolás",
    "Gabriel", "Samuel", "Emiliano", "Matías", "Lucas", "Benjamín", "Rodrigo", "Javier", "Andrés", "Ricardo",
    "Carlos", "José", "Francisco", "Fernando", "Miguel", "Antonio", "Juan", "Pedro", "Hugo", "Ángel"
];

export const FEMALE_NAMES = [
    "Sofía", "Isabella", "Valentina", "Camila", "Lucía", "Mariana", "Victoria", "Daniela", "Gabriela", "Martina",
    "Elena", "Natalia", "Andrea", "Paula", "Sara", "Claudia", "Beatriz", "Adriana", "Lorena", "Luisa",
    "Verónica", "Patricia", "Raquel", "Mónica", "Silvia", "Rosa", "Blanca", "Carmen", "Julia", "Marta"
];

export const MALE_BIOS = [
    "Aquí para pasar un buen rato, no mucho tiempo.",
    "Recién salido de una relación.",
    "Buscando diversión discreta.",
    "Gimnasio, Trabajo, Dormir, Repetir.",
    "No busco nada serio.",
    "Tomemos algo y veamos qué pasa.",
    "Buscador de aventuras.",
    "Emprendedor. Siempre ocupado.",
    "Escríbeme si quieres saber más.",
    "Desliza a la derecha si eres divertida."
];

export const FEMALE_BIOS = [
    "Solo divirtiéndome.",
    "Buscando a un hombre generoso.",
    "Sin ataduras.",
    "Aquí en secreto.",
    "No se lo digas a nadie.",
    "Amante del vino 🍷",
    "Adicta a los viajes ✈️",
    "Aquí por las buenas vibras.",
    "No busco un amigo por correspondencia.",
    "Hazme reír y soy tuya."
];

export const ZODIACS = [
    "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"
];

export const INTERESTS = [
    "Viajes", "Música", "Sushi", "Gimnasio", "Senderismo", "Cine", "Fotografía", "Arte", "Café", "Vino", "Baile", "Lectura", "Cocina", "Yoga", "Surf"
];

export function getRandomProfile(gender: 'male' | 'female', index: number, overriddenName?: string) {
    const names = gender === 'male' ? MALE_NAMES : FEMALE_NAMES;
    const bios = gender === 'male' ? MALE_BIOS : FEMALE_BIOS;

    const name = overriddenName || names[index % names.length];
    const bio = bios[Math.floor(Math.random() * bios.length)];
    const age = Math.floor(Math.random() * (35 - 19 + 1)) + 19;
    const zodiac = ZODIACS[Math.floor(Math.random() * ZODIACS.length)];
    const distance = Math.floor(Math.random() * 15) + 1;

    const i1 = INTERESTS[Math.floor(Math.random() * INTERESTS.length)];
    let i2 = INTERESTS[Math.floor(Math.random() * INTERESTS.length)];
    while (i2 === i1) i2 = INTERESTS[Math.floor(Math.random() * INTERESTS.length)];

    const avatarId = (index % 6) + 1;
    const genderFolder = gender === 'male' ? 'female' : 'male';

    return {
        name,
        age,
        bio,
        zodiac,
        distance: `${distance} km`,
        interests: [i1, i2],
        avatar: `/images/${genderFolder}/tinder/${avatarId}.jpg`,
        verified: Math.random() > 0.3,
        identity: gender === 'male' ? "Hombre" : "Mujer",
        lastSeen: Math.random() > 0.5 ? `hace ${Math.floor(Math.random() * 10) + 1}h` : "En línea"
    };
}
