/**
 * Breakdown rate per hour into custom slots (e.g., 30 mins = half rate)
 * Example: ₹4000/hr -> [{duration: 30, rate: 2000}, {duration: 30, rate: 2000}]
 * 
 * @param {Number} ratePerHour 
 * @param {Number} totalDurationInMinutes
 * @returns Array of breakdown objects
 */
const breakdownRate = (ratePerHour, totalDurationInMinutes) => {
  const breakdowns = [];
  
  // For simplicity, split into 30-minute slots
  let remaining = totalDurationInMinutes;
  const halfHourRate = ratePerHour / 2;

  while (remaining > 0) {
    if (remaining >= 30) {
      breakdowns.push({ duration: 30, rate: halfHourRate });
      remaining -= 30;
    } else {
      // Prorate last chunk if less than 30 mins
      breakdowns.push({ duration: remaining, rate: (ratePerHour / 60) * remaining });
      remaining = 0;
    }
  }

  return breakdowns;
};

module.exports = breakdownRate;
