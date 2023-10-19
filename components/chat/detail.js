import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ChatDetails = () => {
  return (
    <>
      <div className="content-panel">
        <div className='chat-details'>
          <div className='chat-details-top'>
            <div className='chat-details-tl'>
              <Link href="/chat" className="back-btn">
                <figure className="back">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/back-icon.png`}
                    alt="Panache"
                    width={6}
                    height={12}
                    priority={true}
                  />
                </figure>
              </Link>
              <div className='chat-profile'>
                <figure>
                  <span class="notification-dot"></span>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={40}
                    height={40}
                    priority={true}
                  /></figure>
                <div className='con'>
                  <p>John Doe</p>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <div className='chat-details-tr'>
              <Link href="/chat" className="link-btn">
                <figure className="link">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/phone-icon.png`}
                    alt="Panache"
                    width={16}
                    height={16}
                    priority={true}
                  />
                </figure>
              </Link>
              <Link href="/chat" className="link-btn">
                <figure className="link">
                  <span class="notification-dot"></span>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/video-icon.png`}
                    alt="Panache"
                    width={18}
                    height={12}
                    priority={true}
                  />
                </figure>
              </Link>
            </div>
          </div>
          <div className='chat-details-mid'>
            <div className='tab_comment'>
              <div className='chat-main'>
                <div className='chat-main-profile'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </div>
                <div className='chat-main-content'>
                  <div className='comment-main'>
                    <div className='comment'>Nunc tincidunt eleifend urna                                                       </div>
                    <span className='time'>12:36</span>
                  </div>
                  <div className='comment-reply-main'>
                    <span className='time'>15.21</span>
                    <div className='comment-reply'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a dolor ultricies, consequat eros id, rhoncus turpis. Nunc at ligula non sapien semper semper. Donec sit amet turpis sit amet justo hendrerit volutpat. Nunc dictum libero finibus nunc auctor vehicula. Nam pretium tellus massa, at faucibus augue finibus ac.
                    </div>
                  </div>
                </div>
              </div>


              <div className='chat-main'>
                <div className='chat-main-profile'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </div>
                <div className='chat-main-content'>
                  <div className='comment-main'>
                    <div className='comment'>
                      Sed a neque in felis commodo porta. Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                    </div>
                    <span className='time'>12:36</span>
                  </div>
                </div>
              </div>


              <div className='chat-main'>
                <div className='chat-main-profile'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </div>
                <div className='chat-main-content'>
                  <div className='comment-main'>
                    <div className='comment'>
                      Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                    </div>
                    <span className='time'>12:36</span>
                  </div>
                </div>
              </div>

              <div className='chat-main'>
                <div className='chat-main-profile'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </div>
                <div className='chat-main-content'>
                  <div className='comment-main'>
                    <div className='comment'>Nunc tincidunt eleifend urna                                                       </div>
                    <span className='time'>12:36</span>
                  </div>
                  <div className='comment-reply-main'>
                    <span className='time'>15.21</span>
                    <div className='comment-reply'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a dolor ultricies, consequat eros id, rhoncus turpis. Nunc at ligula non sapien semper semper. Donec sit amet turpis sit amet justo hendrerit volutpat. Nunc dictum libero finibus nunc auctor vehicula. Nam pretium tellus massa, at faucibus augue finibus ac.
                    </div>
                  </div>
                </div>
              </div>


              <div className='chat-main'>
                <div className='chat-main-profile'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/member-1.jpg`}
                    alt="Panache"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </div>
                <div className='chat-main-content'>
                  <div className='comment-main'>
                    <div className='comment'>
                      Sed a neque in felis commodo porta. Sed varius bibendum nisl vel ullamcorper. Pellentesque mollis, nisl sed blandit rhoncus, massa nulla aliquet enim, ut varius tortor orci ac diam. Donec semper ante eu
                    </div>
                    <span className='time'>12:36</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='chat-details-btm'>
            <div className='attche'>
              <div className="upload-btn-wrapper">
                <button class="btn"> <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/aatach-icon.png`}
                  alt="Panache"
                  width={18}
                  height={18}
                  priority={true}
                /></button>
                <input type="file" name="myfile" />
              </div>
            </div>
            <div className='from-area'>
              <input type="text" className='form-control' placeholder='Type your message' />
              <button className='chat-btn' type='submit'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/sent-icon.png`}
                  alt="Panache"
                  width={18}
                  height={18}
                  priority={true}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatDetails;