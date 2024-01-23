import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/memberData';
import MemberForm from '../../components/MemberForm';

export default function EditMember() {
  console.warn('in edit member!!!!!');
  const [member, setMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the Member data
  useEffect(() => {
    console.warn('in edit member use effect!!!!!');
    getSingleMember(firebaseKey).then((data) => {
      console.warn('in edit member use effect then!!!!!');
      setMember(data);
    });
    console.warn(useState);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<MemberForm obj={member} />);
}
