import React from "react";

const CategoryList = () => {
  return (
    <div>
      <ul className="row">
        {memberStore.members.map((member) => (
          // <MemberItem key={member.id} member={member} />
          <Link
            key={member.id}
            to={`/members/${member.slug}`}
            className="col-lg-6 col-md-12"
          >
            <li className="card d-flex flex-row align-items-center">
              <AiOutlineUser size={30} className="me-3" />
              <p className="fs-4 m-0 text-nowrap overflow-hidden">
                {member.firstName} {member.lastName}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
