import type { ProblemSubmission } from "../utils/type";

class DsaSubmissionController {
  async makeSubmission(data: ProblemSubmission) {}
  async removeSubmission(submissionId: string) {}
  async getAllUserSubmission(data: string) {}
}
export default new DsaSubmissionController();
