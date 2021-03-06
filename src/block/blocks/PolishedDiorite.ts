import Stone, { StoneType } from './Stone';
import Item from '../../item';
import Prismarine from '../../prismarine';

export default class PolishedDiorite extends Stone {
    constructor() {
        super('minecraft:polished_diorite', StoneType.PolishedDiorite);
    }

    getDropsForCompatibleTool(item: Item, server: Prismarine) {
        return [
            server.getBlockManager().getBlock('minecraft:polished_diorite')
        ];
    }
};
