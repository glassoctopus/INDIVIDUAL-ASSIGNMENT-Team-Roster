import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/memberData';
import MemberForm from '../../components/MemberForm';

export default function EditMember() {
  const [member, setMember] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the Member data
  useEffect(() => {
    getSingleMember(firebaseKey).then((data) => {
      setMember(data);
    });
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<MemberForm obj={member} />);
}
