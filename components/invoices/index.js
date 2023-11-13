import React, { useState } from 'react'
import Image from 'next/image';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProfileModal from "../modal/ProfileModal";

const Invoices = () => {

  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);
  const [modelitems, setmodeldata] = useState([]);

  const handleClose = () => setShow(false);
  const openModal = (e) => {
    setShow(true);
  }

  return (
    <>
      <div className="content-panel">
        <div className='invoices-pane-main'>
          <div className="header-w-filter">
            <h2>Invoices</h2>
            <div className="filter-area" onClick={() => setToggle(!toggle)} >
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/filter-icon.svg`}
                  alt="Panache"
                  width={16}
                  height={18}
                  priority={true}
                />
              </figure>
              <span>Filter</span>
            </div>
            {toggle && (
              <div className="filter-group invoices-filter-group">
                <div className="form-group">
                  <label htmlFor="Created">Created on</label>
                  <select className="form-select" id="Created">
                    <option selected>09/05/2020 - 08/11/2023</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Intake">Intake</label>
                  <select className="form-select" id="Intake">
                    <option selected>Select Intake</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="Year">Intake Year</label>
                  <select className="form-select" id="Year">
                    <option selected>Select Intake Year</option>
                  </select>
                </div>
                <div className="submit-area text-center">
                  <button className="btn btn-blue btn-big" >Apply</button>
                </div>
              </div>
            )}
          </div>
          <div className='invoices-pane-con'>
            <div className='details-tab orange-tab'>
              <Tabs>
                <TabList>
                  <Tab>Quick Commission Payout</Tab>
                  <Tab>Full Commission payout</Tab>
                  <Tab>Outstanding Invoices</Tab>
                  <Tab>Paid Invoices</Tab>
                  <Tab>On Hold Invoices</Tab>
                </TabList>
                <TabPanel>
                  <div className='invoices-pane-tab'>
                    <div className='invoices-pane'>
                      <div className='invoices-pane-l'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-icon.jpg`}
                          alt="Panache"
                          width={16}
                          height={22}
                          priority={true}
                        />
                        <p>Praesent consectetur magna vel lorem eleifend</p>
                      </div>
                      <div className='invoices-pane-r'>
                        <Link href="#" onClick={() => openModal()}>Download</Link>
                      </div>
                    </div>
                    <div className='invoices-pane'>
                      <div className='invoices-pane-l'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-icon.jpg`}
                          alt="Panache"
                          width={16}
                          height={22}
                          priority={true}
                        />
                        <p>Praesent consectetur magna vel lorem eleifend</p>
                      </div>
                      <div className='invoices-pane-r'>
                        <Link href="#" onClick={() => openModal()}>Download</Link>
                      </div>
                    </div>
                    <div className='invoices-pane'>
                      <div className='invoices-pane-l'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-icon.jpg`}
                          alt="Panache"
                          width={16}
                          height={22}
                          priority={true}
                        />
                        <p>Praesent consectetur magna vel lorem eleifend</p>
                      </div>
                      <div className='invoices-pane-r'>
                        <Link href="#" onClick={() => openModal()}>Download</Link>
                      </div>
                    </div>
                    <div className='invoices-pane'>
                      <div className='invoices-pane-l'>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/downlaod-icon.jpg`}
                          alt="Panache"
                          width={16}
                          height={22}
                          priority={true}
                        />
                        <p>Praesent consectetur magna vel lorem eleifend</p>
                      </div>
                      <div className='invoices-pane-r'>
                        <Link href="#" onClick={() => openModal()}>Download</Link>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='invoices-pane-tab'>
                    Full Commission payout
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='invoices-pane-tab'>
                    Outstanding Invoices
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='invoices-pane-tab'>
                    Paid Invoices
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='invoices-pane-tab'>
                    On Hold Invoices
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <ProfileModal
        show={show}
        onHide={handleClose}
        modelitems={modelitems}
      />
    </>
  )
}

export default Invoices;