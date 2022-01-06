const addDateSuffix = date => {
    let dateStr = date.toString();

    // get last char of date string
    const lastChar = dateStr.charAt(dateStr.length - 1);

    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
        dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
        dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
    }

    return dateStr;
};

// function to format a timestamp, accepts the timestamp and an `options` object as parameters
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    // create month object
    const months = {
        0: monthLength === 'short' ? '1' : 'January',
        1: monthLength === 'short' ? '2' : 'February',
        2: monthLength === 'short' ? '3' : 'March',
        3: monthLength === 'short' ? '4' : 'April',
        4: monthLength === 'short' ? '5' : 'May',
        5: monthLength === 'short' ? '6' : 'June',
        6: monthLength === 'short' ? '7' : 'July',
        7: monthLength === 'short' ? '8' : 'August',
        8: monthLength === 'short' ? '9' : 'September',
        9: monthLength === 'short' ? '10' : 'October',
        10: monthLength === 'short' ? '11' : 'November',
        11: monthLength === 'short' ? '12' : 'December'
    };
    const dt = new Date(timestamp)
    const dateObj = new Date(dt.setHours(dt.getHours()+6));

    // new Date(new Date(1642636800000).setHours(dt.getHours()+6)) 

    const formattedMonth = months[dateObj.getMonth()];

    const dayOfMonth = dateSuffix
        ? dateObj.getDate()
        : dateObj.getDate();

    const year = dateObj.getFullYear();
    let hour =
        dateObj.getHours() > 12
            ? Math.floor(dateObj.getHours() / 2)
            : dateObj.getHours();

 

           
    const formattedTimeStamp = `${formattedMonth}-${dayOfMonth}-${year}`;

    return formattedTimeStamp;
};