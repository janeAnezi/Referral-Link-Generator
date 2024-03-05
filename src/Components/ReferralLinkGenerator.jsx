import React, { useState } from 'react';

function generateReferralLink(destinationUrl, userId) {
    const encodedUserId = encodeURIComponent(userId);
    return `${destinationUrl}?ref=${encodedUserId}`;
}

function ReferralLinkGenerator() {
    const [userId, setUserId] = useState('');
    const [referralLink, setReferralLink] = useState('');

    const handleGenerateLink = () => {
        // Assuming destinationUrl is fixed, but you can make it dynamic as needed
        const destinationUrl = "https://example.com/signup";
        const link = generateReferralLink(destinationUrl, userId);
        setReferralLink(link);
    };

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    return (
        <div>
            <input type="text" value={userId} onChange={handleUserIdChange} placeholder="Enter User ID" />
            <button onClick={handleGenerateLink}>Generate Referral Link</button>
            {referralLink && (
                <div>
                    <p>Your referral link:</p>
                    <a href={referralLink} target="_blank" rel="noopener noreferrer">{referralLink}</a>
                </div>
            )}
        </div>
    );
}

export default ReferralLinkGenerator;
