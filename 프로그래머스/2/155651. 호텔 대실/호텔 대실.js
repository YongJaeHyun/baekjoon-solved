function solution(book_time) {
    let answer = 0;
    let rooms = [];
    book_time.sort();
    while(book_time.length > 0) {
        const [start, end] = book_time.shift();
        rooms = cleanRooms(rooms, start);
        rooms.push([start, end]);
        answer = Math.max(answer, rooms.length);
    }
    return answer;
}

function cleanRooms(rooms, currentTime) {
    const minutes = timeToMinutes(currentTime);
    return rooms.filter(([_, endTime]) => timeToMinutes(endTime) > minutes - 10);
}

function timeToMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
}