/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
}

namespace Subjects {
  export class React extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
