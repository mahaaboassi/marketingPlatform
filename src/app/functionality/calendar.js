export const generateYearCalendar = (year) => {
    const months = Array.from({ length: 12 }, (_, m) => {
      const month = m + 1;
      const daysInMonth = new Date(year, month, 0).getDate();
      const firstDay = new Date(year, m, 1).toLocaleString('default', { weekday: 'long' });
  
      return {
        name: new Date(year, m, 1).toLocaleString('default', { month: 'long' }),
        number: month,
        startsOn: firstDay, // ← Added the start day of the month
        days: Array.from({ length: daysInMonth }, (_, d) => d + 1)
      };
    });
  
    return {
      year,
      months
    };
  }
  