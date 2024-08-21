import { forwardRef, useImperativeHandle, useState } from "react";
import { OptionButton } from "./OptionButton";
import { useFitlersStore } from "@/providers/filtersStoreProvider";

const collaborationsDefaultState: CollaborationState = {
  m4m: false,
  m4f: false,
  m4a: false,
  f4m: false,
  f4f: false,
  fm4f: false,
  f4a: false,
  t4m: false,
  t4f: false,
  t4a: false,
  fm4m: false,
  a4a: false,
};

export const CollaborationFilter = forwardRef((_props, ref) => {
  const collaborationsGlobal = useFitlersStore((state) => state.collaborations);
  const applyCollaborations = useFitlersStore(
    (state) => state.applyCollaborations
  );

  const [collaborations, selectCollaborations] =
    useState<CollaborationState>(collaborationsGlobal);
  const clearFilters = () => {
    selectCollaborations(collaborationsDefaultState);
    applyCollaborations(collaborationsDefaultState);
  };
  const applyFilters = () => {
    applyCollaborations(collaborations);
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useImperativeHandle(
    ref,
    () => ({
      clearFilters,
      applyFilters,
    }),
    [collaborations]
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="mt-[10px] cursor-default text-lg text-txt-tertiary">
          Collaborations:
        </h1>
        {Object.values(collaborations).every((v) => v === false) ? (
          <h2 className="me-5 mt-3 text-sm text-txt-onerror-secondary">
            Choose any collaborations!
          </h2>
        ) : (
          <h2 className="me-5 mt-3 text-sm text-txt-queternary">
            {Object.values(collaborations).filter((v) => v === true).length}
          </h2>
        )}
      </div>
      <div className="my-3 grid grid-cols-3 gap-2">
        <OptionButton
          active={collaborations.m4m}
          name="M4M"
          action={() =>
            selectCollaborations({
              ...collaborations,
              m4m: !collaborations.m4m,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.m4f}
          name="M4F"
          action={() =>
            selectCollaborations({
              ...collaborations,
              m4f: !collaborations.m4f,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.m4a}
          name="M4A"
          action={() =>
            selectCollaborations({
              ...collaborations,
              m4a: !collaborations.m4a,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.f4m}
          name="F4M"
          action={() =>
            selectCollaborations({
              ...collaborations,
              f4m: !collaborations.f4m,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.f4f}
          name="F4F"
          action={() =>
            selectCollaborations({
              ...collaborations,
              f4f: !collaborations.f4f,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.fm4f}
          name="FM4F"
          action={() =>
            selectCollaborations({
              ...collaborations,
              fm4f: !collaborations.fm4f,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.f4a}
          name="F4A"
          action={() =>
            selectCollaborations({
              ...collaborations,
              f4a: !collaborations.f4a,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.t4m}
          name="T4M"
          action={() =>
            selectCollaborations({
              ...collaborations,
              t4m: !collaborations.t4m,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.t4f}
          name="T4F"
          action={() =>
            selectCollaborations({
              ...collaborations,
              t4f: !collaborations.t4f,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.t4a}
          name="T4A"
          action={() =>
            selectCollaborations({
              ...collaborations,
              t4a: !collaborations.t4a,
            })
          }
          specialIcon="fiber_manual_record"
        />
        <OptionButton
          active={collaborations.fm4m}
          name="FM4M"
          action={() =>
            selectCollaborations({
              ...collaborations,
              fm4m: !collaborations.fm4m,
            })
          }
          specialIcon="fiber_manual_record"
        />
      </div>
    </div>
  );
});

CollaborationFilter.displayName = "CollaborationFilter";
