import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Table from 'react-bootstrap/Table';
import TemplateModal from "../modal/TemplateModal";

const Template = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const openModal = (e) => {
    setShow(true);
  }

  return (
    <>
      <div className="content-panel template-panel">
        <div className="apply-list-pane-top">
          <h2>Template</h2>
          <Link href="#" className="apply-new-btn" onClick={() => openModal()}>Create New</Link>
        </div>
        <div className="template-table table-container">
          <Table hover>
            <thead>
              <tr>
                <th>Template</th>
                <th>Content</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <div className='no-content'>You don’t have any Template now</div>
        </div>
      </div>
      <TemplateModal
        show={show}
        onHide={handleClose}
      />
    </>
  )
}

export default Template;