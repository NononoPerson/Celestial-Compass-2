function normalizeColorName(color) {
  const map = {
    'Navy Blue': 'navy',
    'Sea Green': 'seagreen',
    'Electric Blue': '#7DF9FF',
    'Gold': 'gold',
    'Silver': 'silver',
    'Brown': 'brown',
    'Red': 'red',
    'Green': 'green',
    'Yellow': 'yellow',
    'Pink': 'pink',
    'Black': 'black',
    'Purple': 'purple'
  };
  return map[color] || color;
}

function storeUserInfo() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const time = document.getElementById('time').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('user', JSON.stringify({ name, dob, time, password }));
  window.location.href = 'login.html';
  return false;
}


function verifyUser() {
  const loginName = document.getElementById('nameLogin').value;
  const loginPassword = document.getElementById('passwordLogin').value;
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.name === loginName && user.password === loginPassword) {
    return true; 
  }
  alert('Invalid login');
  return false;
}


function getZodiacSign(month, day) {
  const zodiacData = [
  { sign: 'Capricorn', meaning: 'Capricorn is ambitious and practical, always striving for long-term success. They value discipline and structure, and thrive when setting solid foundations for themselves and others.', horoscope:'Your vision grows sharper this month. Hard work finally shows payoff. Someone relies on your wisdom. Do not neglect rest amid your rise. Discipline turns goals into achievements.', advice: 'Focus on long-term goals.', lucky_number:'4, 13, 22', lucky_color:'Brown', lucky_day:'Saturday', inauspicious_time:'11:30 AM - 1:00 PM', auspicious_time:'5:45 PM - 6:30 PM', lucky_metal:'Iron', planetary_connection:'Saturn 🪐', zodiac_element:'Earth 🏔️', element_group:'Earth Signs 🏔️' },
  { sign: 'Aquarius', meaning: 'Aquarius is visionary and unique, known for their innovative spirit and unconventional thinking. They often stand out by challenging the norm and dreaming big for the future.', horoscope:'Ideas flow like electricity. You challenge norms with style. A fresh perspective redirects your energy. You may feel distant—check in with your people. Innovation finds roots in emotion.', advice: 'Pursue innovative paths.', lucky_number:'7, 16, 25', lucky_color:'Electric Blue', lucky_day:'Saturday', inauspicious_time:'5:00 PM - 6:30 PM', auspicious_time:'6:25 PM - 7:18 PM', lucky_metal:'Iron', planetary_connection:'Saturn / Uranus 🌀', zodiac_element:'Air 🌬️', element_group:'Air Signs 🌬️' },
  { sign: 'Pisces', meaning: 'Pisces is compassionate and dreamy, deeply connected to emotions and intuition. Their empathetic nature helps them support and understand others with gentle kindness.', horoscope:'Your imagination feels limitless. A creative burst brings fulfillment. You sense what others cannot say. Someone close needs your empathy. Stay dreamy, but keep your feet on the ground.', advice: 'Follow your intuition.', lucky_number:'2, 11, 20', lucky_color:'Sea Green', lucky_day:'Thursday', inauspicious_time:'8:00 AM - 9:30 AM', auspicious_time:'11:00 AM - 12:00 PM', lucky_metal:'Gold', planetary_connection:'Jupiter ⚡', zodiac_element:'Water 🐟', element_group:'Water Signs 🐟' },
  { sign: 'Aries', meaning: 'Aries is bold and enthusiastic, always ready to take the lead and dive into challenges head-on. Their fiery energy fuels their ambition, courage, and natural charisma.', horoscope:'You are full of drive and ready to lead. Opportunities favor bold decisions. Someone admires your fearless energy. A challenge might test your patience. Use your spark to inspire, not overwhelm.', advice: 'Lead with confidence.', lucky_number:'9, 18, 27', lucky_color:'Red', lucky_day:'Tuesday', inauspicious_time:'3:00 PM - 4:30 PM', auspicious_time:'10:20 AM - 11:15 AM', lucky_metal:'Copper', planetary_connection:'Mars 🔥', zodiac_element:'Fire 🔥', element_group:'Fire Signs 🔥' },
  { sign: 'Taurus', meaning: 'Taurus is grounded and loyal, drawn to comfort, stability, and beauty. They move steadily, valuing the journey just as much as the destination.', horoscope:'Comfort feels sweet, but growth needs motion. You are being nudged toward change. Unexpected kindness surprises you. Your routine gets a meaningful upgrade. Trust slow progress—it is building something strong.', advice: 'Build slowly and securely.', lucky_number:'6, 15, 24', lucky_color:'Green', lucky_day:'Friday', inauspicious_time:'9:30 AM - 11:00 AM', auspicious_time:'10:58 AM - 12:53 PM', lucky_metal:'Silver', planetary_connection:'Venus 🌙', zodiac_element:'Earth 🏔️', element_group:'Earth Signs 🏔️' },
  { sign: 'Gemini', meaning: 'Gemini is adaptable and curious, always eager to learn, connect, and explore different perspectives. Their sharp wit and energy make them naturally engaging communicators.', horoscope:'Your curiosity is in overdrive. Conversations unlock important truths. A twist brings creative energy. Someones perspective helps you grow. Flexibility will carry you through sudden turns.', advice: 'Learn and explore often.', lucky_number:'5, 14, 23', lucky_color:'Yellow', lucky_day:'Wednesday', inauspicious_time:'12:30 PM - 2:00 PM', auspicious_time:'12:55 PM - 1:40 PM', lucky_metal:'Bronze', planetary_connection:'Mercury 🧠', zodiac_element:'Air 💨', element_group:'Air Signs 🌬️' },
  { sign: 'Cancer', meaning: 'Cancer is intuitive and nurturing, deeply attuned to emotions and the needs of loved ones. They find purpose in caring for others and building safe, supportive spaces.', horoscope:'Your heart feels especially tender. Home becomes your anchor this month. A memory leads to healing. You may reconnect with someone you have missed. Trust your intuition, it is whispering wisdom.', advice: 'Find joy in caring for others.', lucky_number:'2, 11, 20', lucky_color:'Silver', lucky_day:'Monday', inauspicious_time:'7:30 AM - 9:00 AM', auspicious_time:'1:13 PM - 2:15 PM', lucky_metal:'Silver', planetary_connection:'Moon 🌊', zodiac_element:'Water 🌊', element_group:'Water Signs 🌊' },
  { sign: 'Leo', meaning: 'Leo is charismatic and proud, born to express themselves creatively and shine in the spotlight. Their warmth and loyalty make them magnetic leaders and generous friends.', horoscope:'You are glowing with confidence and charisma. Recognition finally comes your way. A bold move could shift everything. Financial focus brings smart rewards. Lead with heart, not just pride.', advice: 'Shine with creativity.', lucky_number:'1, 10, 19', lucky_color:'Gold', lucky_day:'Sunday', inauspicious_time:'1:30 PM - 3:00 PM', auspicious_time:'7:00 AM - 8:15 AM', lucky_metal:'Gold / Brass', planetary_connection:'Sun ☀️', zodiac_element:'Fire 🔥', element_group:'Fire Signs 🔥' },
  { sign: 'Virgo', meaning: 'Virgo is detail-oriented and kind, always striving to improve and serve others. Their practical nature combines with a deep caring that shows in quiet, thoughtful actions.', horoscope:'Your attention to detail brings results. Someone appreciates your quiet support. You are uncovering clarity through reflection. A plan unfolds exactly as it should. Stay grounded, your growth is visible.', advice: 'Serve others with grace.', lucky_number:'3, 12, 21', lucky_color:'Navy Blue', lucky_day:'Wednesday', inauspicious_time:'10:00 AM - 11:30 AM', auspicious_time:'7:05 AM - 8:15 AM', lucky_metal:'Bronze / Mixed', planetary_connection:'Mercury 🧠', zodiac_element:'Earth 🏔️', element_group:'Earth Signs 🏔️' },
  { sign: 'Libra', meaning: 'Libra is balanced and diplomatic, seeking harmony in relationships and surroundings. Their natural sense of fairness and beauty makes them gentle peacemakers and aesthetes.', horoscope:'Harmony is your mission right now. Relationships deepen in surprising ways. Your eye for beauty shines brightly. A negotiation swings in your favor. Balance helps you find inner calm.', advice: 'Seek harmony in choices.', lucky_number:'6, 15, 24', lucky_color:'Pink', lucky_day:'Friday', inauspicious_time:'2:30 PM - 4:00 PM', auspicious_time:'4:00 PM - 5:15 PM', lucky_metal:'Silver', planetary_connection:'Venus 🌙', zodiac_element:'Air ⚖️', element_group:'Air Signs 🌬️' },
  { sign: 'Scorpio', meaning: 'Scorpio is intense and wise, drawn to mystery, truth, and transformation. Their emotional depth and loyalty make them powerful allies and seekers of authenticity.', horoscope:'Your intuition feels sharper than ever. Hidden truths begin surfacing. A shift within brings new strength. Let go of what you cannot control. Emotional clarity sets you free.', advice: 'Embrace transformation.', lucky_number:'8, 17, 26', lucky_color:'Black', lucky_day:'Tuesday', inauspicious_time:'6:00 AM - 7:30 AM', auspicious_time:'5:30 PM - 6:15 PM', lucky_metal:'Copper / Silver', planetary_connection:'Mars / Pluto 🌑', zodiac_element:'Water 🌊', element_group:'Water Signs 🌊' },
  { sign: 'Sagittarius', meaning: 'Sagittarius is adventurous and honest, always chasing knowledge and experience. Their optimism and blunt truth-telling make them courageous truth-seekers and lifelong learners.', horoscope:'Adventure stirs your soul again. Curiosity leads you somewhere new. A truth helps reset your course. You are drawn to someone inspiring. Keep dreaming, but ground your actions.', advice: 'Keep discovering the world.', lucky_number:'3, 12, 21', lucky_color:'Purple', lucky_day:'Thursday', inauspicious_time:'4:30 PM - 6:00 PM', auspicious_time:'3:00 PM - 4:30 PM', lucky_metal:'Gold / Brass', planetary_connection:'Jupiter ⚡', zodiac_element:'Fire 🔥', element_group:'Fire Signs 🔥' }
];
  const cutoffs = [20, 19, 20, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const index = (day < cutoffs[month - 1]) ? month - 1 : month % 12;
  return zodiacData[index];
}
function showFortune() {
  const nameInput = document.getElementById('nameInput');
  const dobInput = document.getElementById('dobInput');

  const name = nameInput.value.trim();
  const dob = new Date(dobInput.value);

  if (!name || isNaN(dob)) {
    alert("Please enter a valid name and date.");
    return;
  }

  // Re-set the inputs (optional, for formatting or value retention)
  nameInput.value = name;
  dobInput.valueAsDate = dob;

  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const zodiacInfo = getZodiacSign(month, day);

  document.getElementById('userName').textContent = 'Hello, ' + name;
  document.getElementById('zodiacSign').textContent = 'Your Zodiac Sign: ' + zodiacInfo.sign;
  document.getElementById('zodiacMeaning').textContent = 'Traits: ' + zodiacInfo.meaning;
  document.getElementById('advice').textContent = 'Advice: ' + zodiacInfo.advice;
  document.getElementById('horoscope').textContent = 'Horoscope: ' + zodiacInfo.horoscope;
  document.getElementById('lucky_number').textContent = 'Lucky_Number: ' + zodiacInfo.lucky_number;
  document.getElementById('lucky_color').textContent = 'Lucky_Color: ' + zodiacInfo.lucky_color;
  document.getElementById('colorCircle').style.backgroundColor = normalizeColorName(zodiacInfo.lucky_color);
  document.getElementById('lucky_day').textContent = 'Lucky_Day: ' + zodiacInfo.lucky_day;
  document.getElementById('inauspicious_time').textContent = 'Inauspicious_Time: ' + zodiacInfo.inauspicious_time;
  document.getElementById('auspicious_time').textContent = 'Auspicious_Time: ' + zodiacInfo.auspicious_time;
  document.getElementById('lucky_metal').textContent = 'Lucky_Metal: ' + zodiacInfo.lucky_metal;
  document.getElementById('planetary_connection').textContent = 'Planetary_Connection: ' + zodiacInfo.planetary_connection;
  document.getElementById('zodiac_element').textContent = 'Zodiac_Element: ' + zodiacInfo.zodiac_element;
  document.getElementById('element_group').textContent = 'Element_Group: ' + zodiacInfo.element_group;
}

window.onload = function () {
  // Clear any leftover inputs from previous use
  const nameField = document.getElementById('nameLogin');
  const passwordField = document.getElementById('passwordLogin');
  if (nameField) nameField.value = '';
  if (passwordField) passwordField.value = '';

  // If user is stored in localStorage, show zodiac info
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return;

  const date = new Date(user.dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const zodiacInfo = getZodiacSign(month, day);

  document.getElementById('userName').textContent = 'Hello, ' + user.name;
  document.getElementById('zodiacSign').textContent = 'Your Zodiac Sign: ' + zodiacInfo.sign;
  document.getElementById('zodiacMeaning').textContent = 'Traits: ' + zodiacInfo.meaning;
  document.getElementById('advice').textContent = 'Advice: ' + zodiacInfo.advice;
  document.getElementById('horoscope').textContent = 'Horoscope: ' + zodiacInfo.horoscope;
  document.getElementById('lucky_number').textContent = 'Lucky_Number: ' + zodiacInfo.lucky_number;
  document.getElementById('lucky_color').textContent = 'Lucky_Color: ' + zodiacInfo.lucky_color;
  document.getElementById('colorCircle').style.backgroundColor = normalizeColorName(zodiacInfo.lucky_color);
  document.getElementById('lucky_day').textContent = 'Lucky_Day: ' + zodiacInfo.lucky_day;
  document.getElementById('inauspicious_time').textContent = 'Inauspicious_Time: ' + zodiacInfo.inauspicious_time;
  document.getElementById('auspicious_time').textContent = 'Auspicious_Time: ' + zodiacInfo.auspicious_time;
  document.getElementById('lucky_metal').textContent = 'Lucky_Metal: ' + zodiacInfo.lucky_metal;
  document.getElementById('planetary_connection').textContent = 'Planetary_Connection: ' + zodiacInfo.planetary_connection;
  document.getElementById('zodiac_element').textContent = 'Zodiac_Element: ' + zodiacInfo.zodiac_element;
  document.getElementById('element_group').textContent = 'Element_Group: ' + zodiacInfo.element_group;
};
