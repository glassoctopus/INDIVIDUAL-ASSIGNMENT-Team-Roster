/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard';

function Home() {
  const [members, setMembers] = useState([]);

  // TODO: Get user ID using useAuth Hook
  const { user } = useAuth();

  const getAllTheMembers = () => {
    getMembers(user.uid).then((MembersData) => {
      setMembers(MembersData);
      console.warn(user.uid);
    });
  };

  // TODO: make the call to the API to get all the members on component render
  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <div className="text-center my-4">
      <h1>Team</h1>
      <Link href="/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <h2>{members ? 'Members loaded' : 'No Members'}</h2>
      <h3>{}</h3>
      <div className="d-flex flex-wrap">
        {/* TODO: map over books here using BookCard component */}
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
        ))}
        </div>
    </div>
  );
}

export default Home;
