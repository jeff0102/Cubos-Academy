function storeOpen(date) {
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const day = date.getUTCDay();
    let storeOpen = false;

    if (day === 0) {
        return storeOpen;
    }

    if (day === 6 && hour >= 8 && hour < 12) { 
        storeOpen = true;
    }

    if (day >= 1 && day <= 5 && ((hour === 8 && minutes >= 0) || (hour > 8 && hour < 18) || (hour === 18 && minutes === 0))) { 
        storeOpen = true;
    }

    return storeOpen;
}

const now = new Date();
console.log(storeOpen(now));