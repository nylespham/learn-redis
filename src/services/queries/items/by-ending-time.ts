import { client } from "$services/redis";
import { itemsByEndingAtKey, itemsKey} from "$services/keys";
import { deserialize } from "./deserialize";

export const itemsByEndingTime = async (
	order: "DESC" | "ASC" = "DESC",
	offset = 0,
	count = 10
) => {
	const items = await client.zRange(
		itemsByEndingAtKey(),
		Date.now(),
		"+inf",
		{
			BY: "SCORE",
			LIMIT: {
				offset, 
				count
			}
		}
		)
	console.log(items)
	const results = await Promise.all(
		items.map(item => client.hGetAll(itemsKey(item)))
	)
	console.log(results)
	return results.map((item, index) =>  deserialize(items[index],item) )
	
};
