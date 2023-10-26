import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountHeaderPage from '../../components/account-settings/account-header'

const ChangeProfilePicture = () => {

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body
    });
  };

  return (
    <>
      <div className="content-panel">

        <AccountHeaderPage />

        <div className='account-btm'>
          <div className='account-list account-back account-main-menu'>
            <Link href="/account-settings/edit-profile" className='main-link'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/change-profile-picture-icon.png`}
                alt="Panache"
                width={16}
                height={18}
                priority={true}
              />
              <span>Change profile picture</span>
            </Link>
            <Link href="/account-settings/">
              Back to main menu
            </Link>
          </div>
          <div className='upload-pic-area account-details-area'>
            <div className='upload-pic'>
              <img src={createObjectURL} />
            </div>

            <div className='upload-pic-detail'>
              <h4>Documents Name</h4>
              <div className='custom-file-upload'>
                <label for="upload-photo">Upload Profile  Picture</label>
                <input type="file"  id="upload-photo" name="myImage" onChange={uploadToClient} />
              </div>
            </div>

            <button className="btn btn-blue btn-big" type="submit" onClick={uploadToServer}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeProfilePicture;