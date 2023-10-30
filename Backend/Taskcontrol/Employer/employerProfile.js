const Schema = require("../../Module/EmployerRecruitSchema");

const employerProfile = async (req, res) => {
    try {
        console.log("req body", req.body);
        const { formData, employerId, company } = req.body;

        // Add employerId and company to each object in formData
        const updatedFormData = formData.map((jobDetails) => ({
            ...jobDetails,
            employerId: employerId,
            company: company
        }));

        // Save updatedFormData to the database
        const savedJobDetails = await Schema.create(updatedFormData);

        // Send a response back to the client
        res.status(200).json({ message: 'Data saved successfully', savedJobDetails });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = employerProfile;
