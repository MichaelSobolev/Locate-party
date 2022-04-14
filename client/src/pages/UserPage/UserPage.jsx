import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";

export const UserPage = ({ userName, userImage, userEmail }) => {
  const { user_id } = useParams();

  return <ProfileMenu userId={user_id} />;
};
