import React, { useState } from 'react';

function CandidateUpdate() {
    const [candidates, setCandidates] = useState([
        {
            name: '',
            role: 'Testing',
            date: '',
            status: '',
            command: '',
            experience: '',
            expectedCTC: '',
            location: '',
        },
    ]);

    const [labels] = useState(['TechStack', 'Experience', 'Expected CTC', 'Location']);
    const maxRows = 3;

    const handleCandidateChange = (e, index) => {
        const { name, value } = e.target;
        setCandidates((prevCandidates) =>
            prevCandidates.map((candidate, i) => (i === index ? { ...candidate, [name]: value } : candidate))
        );
    };

    const handleAddCandidate = () => {
        if (candidates.length < maxRows) {
            setCandidates((prevCandidates) => [
                ...prevCandidates,
                {
                    name: '',
                    role: 'Testing',
                    date: '',
                    status: '',
                    command: '',
                    experience: '',
                    expectedCTC: '',
                    location: '',
                },
            ]);
        }
    };

    const handleRemoveCandidate = (index) => {
        if (candidates.length > 1) {
            const updatedCandidates = candidates.filter((_, i) => i !== index);
            setCandidates(updatedCandidates);
        }
    };

    const handleCandidateSubmit = () => {
        // Handle submission logic here
        console.log('Candidates:', candidates);
    };

    return (
        <div>
            <div className="container my-5">
                <p className="display-6 text-center">Candidate Profile</p>
            </div>

            <div className="container">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="row justify-content-end">
                            <div className="col mb-3">
                                <button className="btn btn-primary" onClick={handleAddCandidate}>
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {labels.map((label, index) => (
                                <div className="col" key={index}>
                                    <label htmlFor={`candidateLabel${index}`} className="form-label">
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {candidates.map((candidate, index) => (
                            <div className="row justify-content-center mt-2 position-relative" key={index}>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="name"
                                        value={candidate.name}
                                        onChange={(e) => handleCandidateChange(e, index)}
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="experience"
                                        value={candidate.experience}
                                        onChange={(e) => handleCandidateChange(e, index)}
                                        className="form-control"
                                        placeholder="Experience"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="expectedCTC"
                                        value={candidate.expectedCTC}
                                        onChange={(e) => handleCandidateChange(e, index)}
                                        className="form-control"
                                        placeholder="LPA"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        name="location"
                                        value={candidate.location}
                                        onChange={(e) => handleCandidateChange(e, index)}
                                        className="form-control"
                                        placeholder="Location"
                                    />
                                </div>
                                <div className="col">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveCandidate(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div>
                            <button className="btn btn-primary mt-3" onClick={handleCandidateSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateUpdate;

