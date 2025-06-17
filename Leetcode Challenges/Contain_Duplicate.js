var containsDuplicate = function (nums) {
	return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 3, 3, 1]));
