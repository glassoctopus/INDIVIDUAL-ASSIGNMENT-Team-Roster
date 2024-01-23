/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  // grab firebaseKey from url
  const { firebaseKey } = router.query;

  // call to API layer to get the data
  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.first_name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {memberDetails.name} {memberDetails.description}
          {memberDetails.fire ? ' 🤍' : ''}
        </h5>
        <p>{memberDetails.description || ''}</p>
        <hr />
      </div>
    </div>
  );
}
