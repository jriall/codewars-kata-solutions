// https://www.codewars.com/kata/the-fools-day-1/train/javascript

// Fool's Day

// Since today is April's Fools day,Abigail suspects that the news she is reading about today are false. She is worried to look silly to other participants.

// She knows that the news is false if it contains the string "abigail" as a subsequence.

// Help Abigail determine whether this piece of news is true.

// INPUT The first and only line contains a non-empty string s of length no greater than 1000, consisting of lowercase letters of Latin alphabet (a-z).

// OUTPUT Output YES if the string s contains the sequence "abigail" as a subsequence. Otherwise, output NO

// LOOP SOLUTION

function newsIsFalse(news) {
  let test = "abigail";
  let count = 0;
  for (let i=0; i<news.length; i++) {
    if (news[i] === test[count]) {
      count++;
    }
  }
  return count===7 ? "YES" : "NO";
}

// REGEX SOLUTION

function newsIsFalse(news){
  return /a.*b.*i.*g.*a.*i.*l.*/.test(news) ? 'YES' : 'NO';
}