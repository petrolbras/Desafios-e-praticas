function isPalindrome(x) {
	let str = x.toString();
	let reversestr = str.split("").reverse().join("");
	if (reversestr === str) {
		return true;
	} else {
		return false;
	}
}

isPalindrome(121);
