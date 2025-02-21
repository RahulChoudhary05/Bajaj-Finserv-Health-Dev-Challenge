exports.createSuccessResponse = (data) => ({
    is_success: true,
    user_id: "mayank_singh_17092002",  
    email: "rahul@example.com",
    roll_number: "22BCS10040",
    ...data,  
});


exports.createErrorResponse = (message = "An error occurred") => ({
    is_success: false,
    user_id: "rahul_choudhary_22BCS10040",
    email: "rahuls@example.com",
    roll_number: "22BCS10040",
    error: message,
    numbers: [],
    alphabets: [],
    highest_alphabet: [],
});