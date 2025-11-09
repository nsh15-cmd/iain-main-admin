import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import AddressInfo from "../../components/form/form-elements/AddressInput";
import Button from "../../components/ui/button/Button";

import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Create Account" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <InputGroup />
        </div>

        <div className="space-y-6">
          <AddressInfo />
          <div className="flex items-center gap-5 justify-end">
            <Button size="md" variant="primary">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
