function superbowlWin(array) {
    const result = array.find( ({ result }) => result === 'W' );
    if (result) {
        return result.year
    }
    
}


