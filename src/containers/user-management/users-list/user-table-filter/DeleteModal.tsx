import React, { useState } from "react";
import { useUserFilter } from "@/context/UserFilter";

import AlertModal from "@/components/modal/AlertModal";
import { scaleUpTransition } from "@/utils/TransitionConfig";

// ============================================================

const Delete = () => {
  const { selectedUsersId, deleteUser, setSelectAllChecked } = useUserFilter();
  const [alertType, setAlertType] = useState<string | null>(null);

  // render warning alert when the user click delete button
  const handleAlert = () => {
    setAlertType("warning");
  };

  // render success alert
  const handleDeleteConfirmation = () => {
    setAlertType("success");
  };

  // delete the users and hide alert modal
  const handleDelete = () => {
    deleteUser();
    setAlertType(null);
    setSelectAllChecked(false);
  };

  // render danger alert
  const handleCancelDelete = () => {
    setAlertType("danger");
  };

  // hide alert modal
  const handleCloseAlert = () => {
    setAlertType(null);
  };

  const renderAlert = (type: string) => (
    <AlertModal
      open={alertType === type}
      onClose={handleCloseAlert}
      transition={scaleUpTransition}
      alertType={type}
      alertText={getAlertText(type)}
      alertActionButton={renderAlertActionButton(type)}
    />
  );

  const getAlertText = (type: string) => {
    switch (type) {
      case "warning":
        return "Are you sure you want to delete selected customers?";
      case "success":
        return "You have deleted all selected customers!";
      default:
        return "Selected customers were not deleted.";
    }
  };

  const renderAlertActionButton = (type: string) => {
    switch (type) {
      case "warning":
        return (
          <>
            <button
              onClick={handleDeleteConfirmation}
              className="px-6 py-3 mr-4 text-sm font-semibold rounded-md text-destructive-foreground bg-destructive hover:brightness-90">
              Yes, delete!
            </button>
            <button
              onClick={handleCancelDelete}
              className="px-6 py-3 text-sm font-semibold rounded-md text-foreground hover:bg-primary-light hover:text-primary">
              No, cancel
            </button>
          </>
        );
      case "success":
        return (
          <button
            onClick={handleDelete}
            className="px-6 py-3 text-sm font-semibold rounded-md text-primary-foreground bg-primary hover:brightness-90">
            Ok, got it!
          </button>
        );
      default:
        return (
          <button
            onClick={handleCloseAlert}
            className="px-6 py-3 text-sm font-semibold rounded-md text-primary-foreground bg-primary hover:brightness-90">
            Ok, got it!
          </button>
        );
    }
  };

  return (
    <>
      <p className="text-sm">{selectedUsersId.length} Selected</p>
      <button
        onClick={handleAlert}
        className="px-6 py-3 text-sm rounded-md bg-destructive text-destructive-foreground hover:brightness-90">
        Delete Selected
      </button>
      {/* these alert will only render when the `alertType` === `type` */}
      {renderAlert("warning")}
      {renderAlert("success")}
      {renderAlert("danger")}
    </>
  );
};

export default Delete;
